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

/**
 * Retrieves usage information for anomaly detection jobs.
 * @rest_spec_name ml.get_job_stats
 * @since 5.5.0
 * @stability stable
 * @cluster_privileges monitor_ml
 */
export interface Request extends RequestBase {
  path_parts: {
    /**
     * Identifier for the anomaly detection job. It can be a job identifier, a
     * group name, a comma-separated list of jobs, or a wildcard expression. If
     * you do not specify one of these options, the API returns information for
     * all anomaly detection jobs.
     */
    job_id?: Id
  }
  query_parameters: {
    /**
     * Specifies what to do when the request:
     *
     * 1. Contains wildcard expressions and there are no jobs that match.
     * 2. Contains the _all string or no identifiers and there are no matches.
     * 3. Contains wildcard expressions and there are only partial matches.
     *
     * The default value is `true`, which returns an empty `jobs` array when
     * there are no matches and the subset of results when there are partial
     * matches. If this parameter is `false`, the request returns a `404` status
     * code when there are no matches or only partial matches.
     * @server_default true
     * @deprecated 7.10.0 Use `allow_no_match` instead.
     */
    allow_no_jobs?: boolean
  }
}
