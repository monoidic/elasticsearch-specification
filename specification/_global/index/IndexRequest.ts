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
import {
  Id,
  IndexName,
  OpType,
  Refresh,
  Routing,
  SequenceNumber,
  VersionNumber,
  VersionType,
  WaitForActiveShards
} from '@_types/common'
import { long } from '@_types/Numeric'
import { Time } from '@_types/Time'

/**
 * @rest_spec_name index
 * @since 0.0.0
 * @stability stable
 */
export interface Request<TDocument> extends RequestBase {
  path_parts: {
    id?: Id
    index: IndexName
  }
  query_parameters: {
    if_primary_term?: long
    if_seq_no?: SequenceNumber
    op_type?: OpType
    pipeline?: string
    refresh?: Refresh
    routing?: Routing
    timeout?: Time
    version?: VersionNumber
    version_type?: VersionType
    wait_for_active_shards?: WaitForActiveShards
    require_alias?: boolean
  }
  /** @codegen_name document */
  body?: TDocument
}
