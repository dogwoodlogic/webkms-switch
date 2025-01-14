/*!
 * Copyright (c) 2019-2021 Digital Bazaar, Inc. All rights reserved.
 */
import {default as context} from './generateKeyOpContext.js';

export default {
  required: ['@context', 'type', 'invocationTarget'],
  additionalProperties: false,
  properties: {
    '@context': context,
    type: {
      type: 'string',
      enum: ['GenerateKeyOperation']
    },
    invocationTarget: {
      type: 'object',
      required: ['type'],
      additionalProperties: false,
      properties: {
        type: {
          type: 'string'
        }
      }
    }
  }
};
