from django_filters.rest_framework import DjangoFilterBackend, OrderingFilter

class CustomFilter(DjangoFilterBackend, OrderingFilter):
    def filter_queryset(self, request, queryset, view):
        filterset = self.get_filterset(request, queryset, view)
        if filterset is None:
            return queryset
        return filterset.qs