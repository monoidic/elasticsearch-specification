/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { RequestBase } from '@_types/Base'
import { Id } from '@_types/common'
import { Time } from '@_types/Time'
import { Dictionary } from '@spec_utils/Dictionary'
import { NlpInferenceConfigUpdateContainer } from '@ml/_types/inference'

/**
 * Evaluates a trained model.
 * @rest_spec_name ml.infer_trained_model_deployment
 * @since 8.0.0
 * @stability experimental
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The unique identifier of the trained model.
     */
    model_id: Id
  }
  query_parameters: {
    /**
     * Controls the amount of time to wait for inference results.
     * @server_default 10s
     */
    timeout?: Time
  }
  body: {
    /**
     * An array of objects to pass to the model for inference. The objects should contain a field matching your
     * configured trained model input. Typically, the field name is `text_field`. Currently, only a single value is allowed.
     */
    docs: Dictionary<string, string>[]
    /**
     * The inference configuration updates to apply on the API call
     */
    inference_config?: NlpInferenceConfigUpdateContainer
  }
}
