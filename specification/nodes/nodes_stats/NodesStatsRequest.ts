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

import { Fields, Metrics, NodeIds } from '@common/common'
import { Level } from '@common/common/Level'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { Time } from '@common/common_options/time_unit/Time'

/**
 * @rest_spec_name nodes.stats
 * @since 0.0.0
 * @stability TODO
 */
export interface NodesStatsRequest extends RequestBase {
  path_parts?: {
    node_id?: NodeIds
    metric?: Metrics
    index_metric?: Metrics
  }
  query_parameters?: {
    completion_fields?: Fields
    fielddata_fields?: Fields
    fields?: Fields
    groups?: boolean
    include_segment_file_sizes?: boolean
    level?: Level
    timeout?: Time
    types?: string[]
  }
  body?: {}
}