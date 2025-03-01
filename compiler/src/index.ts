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

import { readFileSync } from 'fs'
import { join } from 'path'
import Compiler from './compiler'
import validateRestSpec from './steps/validate-rest-spec'
import addInfo from './steps/add-info'
import addDescription from './steps/add-description'
import validateModel from './steps/validate-model'
import addContentType from './steps/add-content-type'
import readDefinitionValidation from './steps/read-definition-validation'

const nvmrc = readFileSync(join(__dirname, '..', '..', '.nvmrc'), 'utf8')
const nodejsMajor = process.version.split('.').shift()?.slice(1) ?? ''
const nvmMajor = nvmrc.trim().split('.').shift() ?? ''

if (nodejsMajor !== nvmMajor) {
  console.error(`Bad nodejs major version, you are using ${nodejsMajor}, while ${nvmMajor} should be used. Run 'nvm install' to fix this.`)
  process.exit(1)
}

const compiler = new Compiler(join(__dirname, '..', '..', 'specification'))

compiler
  .generateModel()
  .step(addInfo)
  .step(addContentType)
  .step(readDefinitionValidation)
  .step(validateRestSpec)
  .step(addDescription)
  .step(validateModel)
  .write()
  .then(() => {
    console.log('Done')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
