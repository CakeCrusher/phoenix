/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/v1/datasets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List datasets */
        get: operations["listDatasets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get dataset by ID */
        get: operations["getDataset"];
        put?: never;
        post?: never;
        /** Delete dataset by ID */
        delete: operations["deleteDatasetById"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{id}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List dataset versions */
        get: operations["listDatasetVersionsByDatasetId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload dataset from JSON, CSV, or PyArrow */
        post: operations["uploadDataset"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{id}/examples": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get examples from a dataset */
        get: operations["getDatasetExamples"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{id}/csv": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Download dataset examples as CSV file */
        get: operations["getDatasetCsv"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{id}/jsonl/openai_ft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Download dataset examples as OpenAI fine-tuning JSONL file */
        get: operations["getDatasetJSONLOpenAIFineTuning"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{id}/jsonl/openai_evals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Download dataset examples as OpenAI evals JSONL file */
        get: operations["getDatasetJSONLOpenAIEvals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/datasets/{dataset_id}/experiments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List experiments by dataset */
        get: operations["listExperiments"];
        put?: never;
        /** Create experiment on a dataset */
        post: operations["createExperiment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/experiments/{experiment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get experiment by ID */
        get: operations["getExperiment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/span_annotations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create or update span annotations */
        post: operations["annotateSpans"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/evaluations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get span, trace, or document evaluations from a project */
        get: operations["getEvaluations"];
        put?: never;
        /** Add span, trace, or document evaluations */
        post: operations["addEvaluations"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** AnnotateSpansRequestBody */
        AnnotateSpansRequestBody: {
            /** Data */
            data: components["schemas"]["SpanAnnotation"][];
        };
        /** AnnotateSpansResponseBody */
        AnnotateSpansResponseBody: {
            /** Data */
            data: components["schemas"]["InsertedSpanAnnotation"][];
        };
        /**
         * CreateExperimentRequestBody
         * @description Details of the experiment to be created
         */
        CreateExperimentRequestBody: {
            /**
             * Name
             * @description Name of the experiment (if omitted, a random name will be generated)
             */
            name?: string | null;
            /**
             * Description
             * @description An optional description of the experiment
             */
            description?: string | null;
            /**
             * Metadata
             * @description Metadata for the experiment
             */
            metadata?: Record<string, never> | null;
            /**
             * Version Id
             * @description ID of the dataset version over which the experiment will be run (if omitted, the latest version will be used)
             */
            version_id?: string | null;
            /**
             * Repetitions
             * @description Number of times the experiment should be repeated for each example
             * @default 1
             */
            repetitions: number;
        };
        /** CreateExperimentResponseBody */
        CreateExperimentResponseBody: {
            data: components["schemas"]["Experiment"];
        };
        /** Dataset */
        Dataset: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Description */
            description: string | null;
            /** Metadata */
            metadata: Record<string, never>;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** DatasetExample */
        DatasetExample: {
            /** Id */
            id: string;
            /** Input */
            input: Record<string, never>;
            /** Output */
            output: Record<string, never>;
            /** Metadata */
            metadata: Record<string, never>;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /** DatasetVersion */
        DatasetVersion: {
            /** Version Id */
            version_id: string;
            /** Description */
            description: string | null;
            /** Metadata */
            metadata: Record<string, never>;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /** DatasetWithExampleCount */
        DatasetWithExampleCount: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Description */
            description: string | null;
            /** Metadata */
            metadata: Record<string, never>;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Example Count */
            example_count: number;
        };
        /** Experiment */
        Experiment: {
            /**
             * Id
             * @description The ID of the experiment
             */
            id: string;
            /**
             * Dataset Id
             * @description The ID of the dataset associated with the experiment
             */
            dataset_id: string;
            /**
             * Dataset Version Id
             * @description The ID of the dataset version associated with the experiment
             */
            dataset_version_id: string;
            /**
             * Repetitions
             * @description Number of times the experiment is repeated
             */
            repetitions: number;
            /**
             * Metadata
             * @description Metadata of the experiment
             */
            metadata: Record<string, never>;
            /**
             * Project Name
             * @description The name of the project associated with the experiment
             */
            project_name: string | null;
            /**
             * Created At
             * Format: date-time
             * @description The creation timestamp of the experiment
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             * @description The last update timestamp of the experiment
             */
            updated_at: string;
        };
        /** GetDatasetResponseBody */
        GetDatasetResponseBody: {
            data: components["schemas"]["DatasetWithExampleCount"];
        };
        /** GetExperimentResponseBody */
        GetExperimentResponseBody: {
            data: components["schemas"]["Experiment"];
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** InsertedSpanAnnotation */
        InsertedSpanAnnotation: {
            /**
             * Id
             * @description The ID of the inserted span annotation
             */
            id: string;
        };
        /** ListDatasetExamplesData */
        ListDatasetExamplesData: {
            /** Dataset Id */
            dataset_id: string;
            /** Version Id */
            version_id: string;
            /** Examples */
            examples: components["schemas"]["DatasetExample"][];
        };
        /** ListDatasetExamplesResponseBody */
        ListDatasetExamplesResponseBody: {
            data: components["schemas"]["ListDatasetExamplesData"];
        };
        /** ListDatasetVersionsResponseBody */
        ListDatasetVersionsResponseBody: {
            /** Data */
            data: components["schemas"]["DatasetVersion"][];
            /** Next Cursor */
            next_cursor: string | null;
        };
        /** ListDatasetsResponseBody */
        ListDatasetsResponseBody: {
            /** Data */
            data: components["schemas"]["Dataset"][];
            /** Next Cursor */
            next_cursor: string | null;
        };
        /** ListExperimentsResponseBody */
        ListExperimentsResponseBody: {
            /** Data */
            data: components["schemas"]["Experiment"][];
        };
        /** SpanAnnotation */
        SpanAnnotation: {
            /**
             * Span Id
             * @description OpenTelemetry Span ID (hex format w/o 0x prefix)
             */
            span_id: string;
            /**
             * Name
             * @description The name of the annotation
             */
            name: string;
            /**
             * Annotator Kind
             * @description The kind of annotator used for the annotation
             * @enum {string}
             */
            annotator_kind: "LLM" | "HUMAN";
            /** @description The result of the annotation */
            result?: components["schemas"]["SpanAnnotationResult"] | null;
            /**
             * Metadata
             * @description Metadata for the annotation
             */
            metadata?: Record<string, never> | null;
        };
        /** SpanAnnotationResult */
        SpanAnnotationResult: {
            /**
             * Label
             * @description The label assigned by the annotation
             */
            label?: string | null;
            /**
             * Score
             * @description The score assigned by the annotation
             */
            score?: number | null;
            /**
             * Explanation
             * @description Explanation of the annotation result
             */
            explanation?: string | null;
        };
        /** UploadDatasetData */
        UploadDatasetData: {
            /** Dataset Id */
            dataset_id: string;
        };
        /** UploadDatasetResponseBody */
        UploadDatasetResponseBody: {
            data: components["schemas"]["UploadDatasetData"];
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listDatasets: {
        parameters: {
            query?: {
                /** @description Cursor for pagination */
                cursor?: string | null;
                /** @description An optional dataset name to filter by */
                name?: string | null;
                /** @description The max number of datasets to return at a time. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListDatasetsResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    getDataset: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the dataset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetDatasetResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    deleteDatasetById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the dataset to delete. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Dataset not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Invalid dataset ID */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    listDatasetVersionsByDatasetId: {
        parameters: {
            query?: {
                /** @description Cursor for pagination */
                cursor?: string | null;
                /** @description The max number of dataset versions to return at a time */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description The ID of the dataset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListDatasetVersionsResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    uploadDataset: {
        parameters: {
            query?: {
                /** @description If true, fulfill request synchronously and return JSON containing dataset_id. */
                sync?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action?: "create" | "append";
                    name: string;
                    description?: string;
                    inputs: Record<string, never>[];
                    outputs?: Record<string, never>[];
                    metadata?: Record<string, never>[];
                };
                "multipart/form-data": {
                    /** @enum {string} */
                    action?: "create" | "append";
                    name: string;
                    description?: string;
                    "input_keys[]": string[];
                    "output_keys[]": string[];
                    "metadata_keys[]"?: string[];
                    /** Format: binary */
                    file: string;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadDatasetResponseBody"] | null;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Dataset of the same name already exists */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Invalid request body */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    getDatasetExamples: {
        parameters: {
            query?: {
                /** @description The ID of the dataset version (if omitted, returns data from the latest version) */
                version_id?: string | null;
            };
            header?: never;
            path: {
                /** @description The ID of the dataset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListDatasetExamplesResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    getDatasetCsv: {
        parameters: {
            query?: {
                /** @description The ID of the dataset version (if omitted, returns data from the latest version) */
                version_id?: string | null;
            };
            header?: never;
            path: {
                /** @description The ID of the dataset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/csv": string;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    getDatasetJSONLOpenAIFineTuning: {
        parameters: {
            query?: {
                /** @description The ID of the dataset version (if omitted, returns data from the latest version) */
                version_id?: string | null;
            };
            header?: never;
            path: {
                /** @description The ID of the dataset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Invalid dataset or version ID */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    getDatasetJSONLOpenAIEvals: {
        parameters: {
            query?: {
                /** @description The ID of the dataset version (if omitted, returns data from the latest version) */
                version_id?: string | null;
            };
            header?: never;
            path: {
                /** @description The ID of the dataset */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Invalid dataset or version ID */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    listExperiments: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataset_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Experiments retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListExperimentsResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    createExperiment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                dataset_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateExperimentRequestBody"];
            };
        };
        responses: {
            /** @description Experiment retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateExperimentResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Dataset or DatasetVersion not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    getExperiment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                experiment_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Experiment retrieved successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetExperimentResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Experiment not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    annotateSpans: {
        parameters: {
            query?: {
                /** @description If true, fulfill request synchronously. */
                sync?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AnnotateSpansRequestBody"];
            };
        };
        responses: {
            /** @description Span annotations inserted successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AnnotateSpansResponseBody"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Span not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    getEvaluations: {
        parameters: {
            query?: {
                /** @description The name of the project to get evaluations from (if omitted, evaluations will be drawn from the `default` project) */
                project_name?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    addEvaluations: {
        parameters: {
            query?: never;
            header?: {
                "content-type"?: string | null;
                "content-encoding"?: string | null;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/x-protobuf": string;
                "application/x-pandas-arrow": string;
            };
        };
        responses: {
            /** @description Successful Response */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Unsupported content type, only gzipped protobuf and pandas-arrow are supported */
            415: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
            /** @description Unprocessable Entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
}
