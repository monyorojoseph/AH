import uuid
from django.contrib.gis.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django_lifecycle import LifecycleModelMixin, hook, AFTER_CREATE
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

# custom user manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):

        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

# custom user
class CustomUser(LifecycleModelMixin, AbstractBaseUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name_plural = "Users"

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    
    # @hook(AFTER_CREATE)
    # def create_profile(self):
    #     Profile.objects.create(user=self)
    #     return


# profile
class Profile(models.Model):
    user = models.OneToOneField('CustomUser', on_delete=models.CASCADE, related_name='profile')
    phone = models.CharField(max_length=15, unique=True)
    full_name = models.CharField(max_length=200, null=True)

    MANAGEMENT = 'Management'
    TENANT = 'Tenant'
    AGENT = 'Agent'

    ROLES = [
        (MANAGEMENT, MANAGEMENT),
        (AGENT, AGENT),
        (TENANT, TENANT)
    ]

    role = models.CharField(max_length=15, choices=ROLES, default=TENANT)
    image = ProcessedImageField(upload_to='user',
                                           processors=[ResizeToFill(300, 250)],
                                           format='JPEG',
                                           options={'quality': 100})
    
    def __str__(self) -> str:
        return self.full_name or str(self.user.email)