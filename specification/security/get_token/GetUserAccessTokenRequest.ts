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
// TODO: once the compiler can handle it, the body should use the commented classes in this file

import { Password, Username } from '@common/common/Credentials'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { AccessTokenGrantType } from '@common/security/AccessTokenGrantType'

/**
 * @rest_spec_name security.get_token
 * @since 5.5.0
 * @stability TODO
 */
export interface SecurityGetTokenRequest extends RequestBase {
  query_parameters?: {}
  // body: AccessTokenGrantTypePassword | AccessTokenGrantTypeClientCredentials | AccessTokenGrantTypeKerberos | AccessTokenGrantTypeRefresh
  body?: {
    grant_type?: AccessTokenGrantType
    scope?: string
    password?: Password
    kerberos_ticket?: string
    refresh_token?: string
    username?: Username
  }
}

// export class AccessTokenGrantTypePassword {
//   grant_type: 'password'
//   username: string
//   password: string
//   scope?: string
// }

// export class AccessTokenGrantTypeClientCredentials {
//   grant_type: 'client_credentials'
//   scope?: string
// }

// export class AccessTokenGrantTypeKerberos {
//   grant_type: '_kerberos'
//   kerberos_ticket: string
//   scope?: string
// }

// export class AccessTokenGrantTypeRefresh {
//   grant_type: 'refresh_token'
//   refresh_token: string
//   scope?: string
// }