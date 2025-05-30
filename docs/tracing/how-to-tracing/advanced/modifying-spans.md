# Modifying Spans

Sometimes while instrumenting your application, you may want to filter out or modify certain spans from being sent to Phoenix. For example, you may want to filter out spans that are that contain sensitive information or contain redundant information.

To do this, you can use a custom `SpanProcessor` and attach it to the OpenTelemetry `TracerProvider`.

{% tabs %}
{% tab title="Python" %}
```python
from phoenix.otel import register
from phoenix.otel import BatchSpanProcessor
from opentelemetry.context import Context
from opentelemetry.sdk.trace import ReadableSpan, Span


class FilteringSpanProcessor(BatchSpanProcessor):
    def _filter_condition(self, span: Span) -> bool:
        # returns True if the span should be filtered out
        return span.name == "secret_span"

    def on_start(self, span: Span, parent_context: Context) -> None:
        if self._filter_condition(span):
            return
        super().on_start(span, parent_context)

    def on_end(self, span: ReadableSpan) -> None:
        if self._filter_condition(span):
            logger.info("Filtering span: %s", span.name)
            return
        super().on_end(span)


tracer_provider = register()
tracer_provider.add_span_processor(
    FilteringSpanProcessor(
        endpoint="http://localhost:6006/v1/traces",
        protocol="http/protobuf",
    )
)
```

In this example, we're filtering out any spans that have the name "secret\_span" by bypassing the `on_start` and `on_end` hooks of the inherited `BatchSpanProcessor`.

Notice that this logic can be extended to modify a span and redact sensitive information if preserving the span is preferred.
{% endtab %}
{% endtabs %}
