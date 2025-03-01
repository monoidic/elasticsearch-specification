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

/**
 * Get information about how machine learning jobs and trained models are using memory,
 * on each node, both within the JVM heap, and natively, outside of the JVM.
 * @rest_spec_name ml.get_memory_stats
 * @since 8.2.0
 * @stability stable
 * @cluster_privileges monitor_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * The names of particular nodes in the cluster to target. For example, `nodeId1,nodeId2` or
     * `ml:true`
     */
    node_id?: Id
  }
  query_parameters: {
    /**
     * Specify this query parameter to include the fields with units in the response. Otherwise only
     * the `_in_bytes` sizes are returned in the response.
     */
    human?: boolean
    /**
     * Period to wait for a connection to the master node. If no response is received before the timeout
     * expires, the request fails and returns an error.
     * @server_default 30s
     */
    master_timeout?: Time
    /**
     * Period to wait for a response. If no response is received before the timeout expires, the request
     * fails and returns an error.
     * @server_default 30s
     */
    timeout?: Time
  }
}
