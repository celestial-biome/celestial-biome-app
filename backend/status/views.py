from datetime import datetime, timezone
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})


@api_view(["GET"])
def status(request):
    return Response(
        {
            "backend": "Django REST backend",
            "environment": "development",
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "features": [
                "Django REST Framework API",
                "CORS enabled",
                "Health and status endpoints",
            ],
        }
    )
