/*!
 * Copyright (c) 2019-2021 Digital Bazaar, Inc. All rights reserved.
 */
import {CONTEXT_URL as WEBKMS_CONTEXT_URL} from 'webkms-context';

export default {
  type: 'array',
  items: [{
    const: WEBKMS_CONTEXT_URL,
  }, {
    type: 'string'
  }]
};
