
function Table(ret) {
  // grow method not included; table is not growable
  ret.set = function(i, func) {
    this[i] = func;
  };
  ret.get = function(i) {
    return this[i];
  };
  return ret;
}

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
    return uint8Array;
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1024, "MDEyMzQ1Njc4OWFiY2RlZgAAAAAAAAAAAAAAAAAAAAAAARcCHRgTAx4bGQsUCAQNHxYcEhoKBwwVEQkGEAUPDg==");
  base64DecodeToExistingUint8Array(bufferView, 1088, "BwAAAAcAAAAAAQAAAAAAAGAEAQA=");
}
function wasm2js_trap() { throw new Error('abort'); }

  function wasm2js_memory_copy(dest, source, size) {
    // TODO: traps on invalid things
    bufferView.copyWithin(dest, source, source + size);
  }
      
  function wasm2js_memory_fill(dest, value, size) {
    dest = dest >>> 0;
    size = size >>> 0;
    if (dest + size > bufferView.length) throw "trap: invalid memory.fill";
    bufferView.fill(value, dest, dest + size);
  }
      
function asmFunc(imports) {
 var buffer = new ArrayBuffer(131072);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var nan = NaN;
 var infinity = Infinity;
 var __stack_pointer = 66656;
 var global$1 = 1088;
 var global$2 = 66656;
 var global$3 = 1104;
 var global$4 = 1024;
 var global$5 = 1108;
 var global$6 = 1024;
 var global$7 = 0;
 var global$8 = 1;
 function __wasm_call_ctors() {
  
 }
 
 function undefined_weak_JS_random_upto($0) {
  return Math.floor(Math.random() * $0);
 }
 
 function dsf_init($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0, $4 = 0, i64toi32_i32$0 = 0, $3 = 0, $2 = 0;
  label$1 : {
   if (($1 | 0) < (1 | 0)) {
    break label$1
   }
   $2 = $1 & 7 | 0;
   $3 = 0;
   label$2 : {
    if (($1 + -1 | 0) >>> 0 < 7 >>> 0) {
     break label$2
    }
    $4 = $0 + 16 | 0;
    $1 = $1 & -8 | 0;
    $3 = 0;
    label$3 : while (1) {
     i64toi32_i32$1 = $4;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = i64toi32_i32$1 + 8 | 0;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = $4 + -8 | 0;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = $4 + -16 | 0;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     $4 = $4 + 32 | 0;
     $3 = $3 + 8 | 0;
     if (($1 | 0) != ($3 | 0)) {
      continue label$3
     }
     break label$3;
    };
   }
   if (!$2) {
    break label$1
   }
   $4 = $0 + ($3 << 2 | 0) | 0;
   label$4 : while (1) {
    HEAP32[$4 >> 2] = 6;
    $4 = $4 + 4 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$4
    }
    break label$4;
   };
  }
 }
 
 function snew_dsf($0) {
  $0 = $0 | 0;
  var i64toi32_i32$1 = 0, $4 = 0, i64toi32_i32$0 = 0, $1 = 0, $2 = 0, $3 = 0;
  $1 = 0;
  $2 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $2 + ($0 << 2 | 0) | 0;
  label$1 : {
   if (($0 | 0) < (1 | 0)) {
    break label$1
   }
   $3 = $0 & 7 | 0;
   label$2 : {
    if (($0 + -1 | 0) >>> 0 < 7 >>> 0) {
     break label$2
    }
    $4 = $2 + 16 | 0;
    $0 = $0 & -8 | 0;
    $1 = 0;
    label$3 : while (1) {
     i64toi32_i32$1 = $4;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = i64toi32_i32$1 + 8 | 0;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = $4 + -8 | 0;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     i64toi32_i32$1 = $4 + -16 | 0;
     i64toi32_i32$0 = 6;
     HEAP32[i64toi32_i32$1 >> 2] = 6;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     $4 = $4 + 32 | 0;
     $1 = $1 + 8 | 0;
     if (($0 | 0) != ($1 | 0)) {
      continue label$3
     }
     break label$3;
    };
   }
   if (!$3) {
    break label$1
   }
   $4 = $2 + ($1 << 2 | 0) | 0;
   label$4 : while (1) {
    HEAP32[$4 >> 2] = 6;
    $4 = $4 + 4 | 0;
    $3 = $3 + -1 | 0;
    if ($3) {
     continue label$4
    }
    break label$4;
   };
  }
  return $2 | 0;
 }
 
 function edsf_canonify($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $7 = 0, $4 = 0, $6 = 0, $8 = 0, $5 = 0;
  $3 = 0;
  $4 = $1;
  label$1 : {
   $5 = $0 + ($1 << 2 | 0) | 0;
   $6 = HEAP32[$5 >> 2] | 0;
   if ($6 & 2 | 0) {
    break label$1
   }
   $3 = 0;
   $7 = $6;
   label$2 : while (1) {
    $8 = $7;
    $3 = $3 ^ ($7 & 1 | 0) | 0;
    $7 = HEAP32[($0 + ($7 & -4 | 0) | 0) >> 2] | 0;
    if (!($7 & 2 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $4 = $8 >> 2 | 0;
  }
  label$3 : {
   if (!$2) {
    break label$3
   }
   HEAP8[$2 >> 0] = $3 & 1 | 0;
  }
  label$4 : {
   if (($4 | 0) == ($1 | 0)) {
    break label$4
   }
   $1 = $4 << 2 | 0;
   $7 = $3 & 1 | 0;
   HEAP32[$5 >> 2] = $1 | $7 | 0;
   label$5 : {
    $3 = $6 >> 2 | 0;
    if (($3 | 0) == ($4 | 0)) {
     break label$5
    }
    label$6 : while (1) {
     $8 = $0 + ($3 << 2 | 0) | 0;
     $3 = HEAP32[$8 >> 2] | 0;
     $7 = ($6 & 1 | 0) ^ $7 | 0;
     HEAP32[$8 >> 2] = $1 | $7 | 0;
     $6 = $3;
     $3 = $3 >> 2 | 0;
     if (($3 | 0) != ($4 | 0)) {
      continue label$6
     }
     break label$6;
    };
   }
   $1 = $4;
  }
  return $1 | 0;
 }
 
 function edsf_merge($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $9 = 0, $8 = 0, $6 = 0, $5 = 0, $4 = 0, $7 = 0, $10 = 0;
  $4 = 0;
  label$1 : {
   label$2 : {
    $5 = $0 + ($1 << 2 | 0) | 0;
    $6 = HEAP32[$5 >> 2] | 0;
    if (!($6 & 2 | 0)) {
     break label$2
    }
    $7 = 0;
    break label$1;
   }
   $7 = 0;
   $8 = $6;
   label$3 : while (1) {
    $9 = $8;
    $7 = $7 ^ ($9 & 1 | 0) | 0;
    $8 = HEAP32[($0 + ($9 & -4 | 0) | 0) >> 2] | 0;
    if (!($8 & 2 | 0)) {
     continue label$3
    }
    break label$3;
   };
   $10 = $9 >> 2 | 0;
   if (($10 | 0) == ($1 | 0)) {
    break label$1
   }
   $1 = $9 & -4 | 0;
   $8 = $7 & 1 | 0;
   HEAP32[$5 >> 2] = $1 | $8 | 0;
   label$4 : {
    $9 = $6 >> 2 | 0;
    if (($9 | 0) == ($10 | 0)) {
     break label$4
    }
    label$5 : while (1) {
     $5 = $0 + ($9 << 2 | 0) | 0;
     $9 = HEAP32[$5 >> 2] | 0;
     $8 = ($6 & 1 | 0) ^ $8 | 0;
     HEAP32[$5 >> 2] = $8 | $1 | 0;
     $6 = $9;
     $9 = $9 >> 2 | 0;
     if (($9 | 0) != ($10 | 0)) {
      continue label$5
     }
     break label$5;
    };
   }
   $1 = $10;
  }
  label$6 : {
   $5 = $0 + ($2 << 2 | 0) | 0;
   $6 = HEAP32[$5 >> 2] | 0;
   if ($6 & 2 | 0) {
    break label$6
   }
   $4 = 0;
   $8 = $6;
   label$7 : while (1) {
    $9 = $8;
    $4 = $4 ^ ($9 & 1 | 0) | 0;
    $8 = HEAP32[($0 + ($9 & -4 | 0) | 0) >> 2] | 0;
    if (!($8 & 2 | 0)) {
     continue label$7
    }
    break label$7;
   };
   $10 = $9 >> 2 | 0;
   if (($10 | 0) == ($2 | 0)) {
    break label$6
   }
   $2 = $9 & -4 | 0;
   $8 = $4 & 1 | 0;
   HEAP32[$5 >> 2] = $2 | $8 | 0;
   label$8 : {
    $9 = $6 >> 2 | 0;
    if (($9 | 0) == ($10 | 0)) {
     break label$8
    }
    label$9 : while (1) {
     $5 = $0 + ($9 << 2 | 0) | 0;
     $9 = HEAP32[$5 >> 2] | 0;
     $8 = ($6 & 1 | 0) ^ $8 | 0;
     HEAP32[$5 >> 2] = $8 | $2 | 0;
     $6 = $9;
     $9 = $9 >> 2 | 0;
     if (($9 | 0) != ($10 | 0)) {
      continue label$9
     }
     break label$9;
    };
   }
   $2 = $10;
  }
  label$10 : {
   label$11 : {
    if (($1 | 0) != ($2 | 0)) {
     break label$11
    }
    $8 = HEAP32[($0 + ($1 << 2 | 0) | 0) >> 2] | 0;
    break label$10;
   }
   $9 = (($1 | 0) < ($2 | 0) ? $1 : $2) << 2 | 0;
   $8 = $0 + $9 | 0;
   $6 = ($1 | 0) > ($2 | 0) ? $1 : $2;
   $5 = $0 + ($6 << 2 | 0) | 0;
   HEAP32[$8 >> 2] = (HEAP32[$8 >> 2] | 0) + ((HEAP32[$5 >> 2] | 0) & -4 | 0) | 0;
   $8 = $9 | ((($7 ^ $3 | 0) ^ $4 | 0) & 1 | 0) | 0;
   HEAP32[$5 >> 2] = $8;
   $1 = $6;
  }
  label$12 : {
   if ($8 & 2 | 0) {
    break label$12
   }
   $2 = $0 + ($1 << 2 | 0) | 0;
   $4 = 0;
   $9 = $8;
   label$13 : while (1) {
    $7 = $9;
    $4 = $4 ^ ($9 & 1 | 0) | 0;
    $9 = HEAP32[($0 + ($9 & -4 | 0) | 0) >> 2] | 0;
    if (!($9 & 2 | 0)) {
     continue label$13
    }
    break label$13;
   };
   $6 = $7 >> 2 | 0;
   if (($6 | 0) == ($1 | 0)) {
    break label$12
   }
   $5 = $7 & -4 | 0;
   $7 = $4 & 1 | 0;
   HEAP32[$2 >> 2] = $5 | $7 | 0;
   $4 = $8 >> 2 | 0;
   if (($4 | 0) == ($6 | 0)) {
    break label$12
   }
   label$14 : while (1) {
    $9 = $0 + ($4 << 2 | 0) | 0;
    $4 = HEAP32[$9 >> 2] | 0;
    $7 = ($8 & 1 | 0) ^ $7 | 0;
    HEAP32[$9 >> 2] = $7 | $5 | 0;
    $8 = $4;
    $4 = $8 >> 2 | 0;
    if (($4 | 0) != ($6 | 0)) {
     continue label$14
    }
    break label$14;
   };
  }
 }
 
 function dsf_canonify($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $6 = 0, $5 = 0, $3 = 0, $7 = 0, $2 = 0;
  label$1 : {
   $2 = $0 + ($1 << 2 | 0) | 0;
   $3 = HEAP32[$2 >> 2] | 0;
   if ($3 & 2 | 0) {
    break label$1
   }
   $4 = 0;
   $5 = $3;
   label$2 : while (1) {
    $6 = $5;
    $4 = $4 ^ ($6 & 1 | 0) | 0;
    $5 = HEAP32[($0 + ($6 & -4 | 0) | 0) >> 2] | 0;
    if (!($5 & 2 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $7 = $6 >> 2 | 0;
   if (($7 | 0) == ($1 | 0)) {
    break label$1
   }
   $1 = $6 & -4 | 0;
   $6 = $4 & 1 | 0;
   HEAP32[$2 >> 2] = $1 | $6 | 0;
   label$3 : {
    $4 = $3 >> 2 | 0;
    if (($4 | 0) == ($7 | 0)) {
     break label$3
    }
    label$4 : while (1) {
     $5 = $0 + ($4 << 2 | 0) | 0;
     $4 = HEAP32[$5 >> 2] | 0;
     $6 = ($3 & 1 | 0) ^ $6 | 0;
     HEAP32[$5 >> 2] = $6 | $1 | 0;
     $3 = $4;
     $4 = $4 >> 2 | 0;
     if (($4 | 0) != ($7 | 0)) {
      continue label$4
     }
     break label$4;
    };
   }
   $1 = $7;
  }
  return $1 | 0;
 }
 
 function dsf_merge($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  edsf_merge($0 | 0, $1 | 0, $2 | 0, 0 | 0);
 }
 
 function dsf_size($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $6 = 0, $5 = 0, $3 = 0, $7 = 0, $2 = 0;
  label$1 : {
   $2 = $0 + ($1 << 2 | 0) | 0;
   $3 = HEAP32[$2 >> 2] | 0;
   if ($3 & 2 | 0) {
    break label$1
   }
   $4 = 0;
   $5 = $3;
   label$2 : while (1) {
    $6 = $5;
    $4 = $4 ^ ($6 & 1 | 0) | 0;
    $5 = HEAP32[($0 + ($6 & -4 | 0) | 0) >> 2] | 0;
    if (!($5 & 2 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $7 = $6 >> 2 | 0;
   if (($7 | 0) == ($1 | 0)) {
    break label$1
   }
   $1 = $6 & -4 | 0;
   $6 = $4 & 1 | 0;
   HEAP32[$2 >> 2] = $1 | $6 | 0;
   label$3 : {
    $4 = $3 >> 2 | 0;
    if (($4 | 0) == ($7 | 0)) {
     break label$3
    }
    label$4 : while (1) {
     $5 = $0 + ($4 << 2 | 0) | 0;
     $4 = HEAP32[$5 >> 2] | 0;
     $6 = ($3 & 1 | 0) ^ $6 | 0;
     HEAP32[$5 >> 2] = $6 | $1 | 0;
     $3 = $4;
     $4 = $4 >> 2 | 0;
     if (($4 | 0) != ($7 | 0)) {
      continue label$4
     }
     break label$4;
    };
   }
   $1 = $7;
  }
  return (HEAP32[($0 + ($1 << 2 | 0) | 0) >> 2] | 0) >> 2 | 0 | 0;
 }
 
 function findloop_new_state($0) {
  $0 = $0 | 0;
  var $2 = 0;
  $2 = Math_imul($0, 44);
  $0 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = ($2 + $0 | 0) + 44 | 0;
  return $0 | 0;
 }
 
 function findloop_free_state($0) {
  $0 = $0 | 0;
 }
 
 function findloop_is_loop_edge($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = 0;
  label$1 : {
   if ((HEAP32[(($0 + Math_imul($1, 44) | 0) + 40 | 0) >> 2] | 0 | 0) == ($2 | 0)) {
    break label$1
   }
   $3 = (HEAP32[(($0 + Math_imul($2, 44) | 0) + 40 | 0) >> 2] | 0 | 0) != ($1 | 0);
  }
  return $3 | 0;
 }
 
 function findloop_is_bridge($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      $5 = $0 + Math_imul($1, 44) | 0;
      if ((HEAP32[($5 + 40 | 0) >> 2] | 0 | 0) != ($2 | 0)) {
       break label$4
      }
      $2 = (HEAP32[($5 + 28 | 0) >> 2] | 0) - (HEAP32[($5 + 24 | 0) >> 2] | 0) | 0;
      $1 = $0 + Math_imul(HEAP32[($5 + 12 | 0) >> 2] | 0, 44) | 0;
      $0 = HEAP32[($1 + 24 | 0) >> 2] | 0;
      $1 = HEAP32[($1 + 28 | 0) >> 2] | 0;
      label$5 : {
       if (!$3) {
        break label$5
       }
       HEAP32[$3 >> 2] = $2 + 1 | 0;
      }
      if ($4) {
       break label$3
      }
      break label$2;
     }
     $5 = 0;
     if ((HEAP32[(($0 + Math_imul($2, 44) | 0) + 40 | 0) >> 2] | 0 | 0) != ($1 | 0)) {
      break label$1
     }
     $1 = $0 + Math_imul($2, 44) | 0;
     $2 = (HEAP32[($1 + 28 | 0) >> 2] | 0) - (HEAP32[($1 + 24 | 0) >> 2] | 0) | 0;
     $1 = $0 + Math_imul(HEAP32[($1 + 12 | 0) >> 2] | 0, 44) | 0;
     $0 = HEAP32[($1 + 24 | 0) >> 2] | 0;
     $1 = HEAP32[($1 + 28 | 0) >> 2] | 0;
     label$6 : {
      if (!$4) {
       break label$6
      }
      HEAP32[$4 >> 2] = $2 + 1 | 0;
     }
     $4 = $3;
     if (!$4) {
      break label$2
     }
    }
    HEAP32[$4 >> 2] = ($1 - $0 | 0) - $2 | 0;
   }
   $5 = 1;
  }
  return $5 | 0;
 }
 
 function findloop_run($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $6 = 0, $4 = 0, $7 = 0, $5 = 0, $11 = 0, $10 = 0, $12 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $8 = 0, $9 = 0;
  $4 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if (($1 | 0) < (0 | 0)) {
      break label$3
     }
     label$4 : {
      label$5 : {
       if (!$1) {
        break label$5
       }
       $4 = $1 + 1 | 0;
       $5 = $4 & 1 | 0;
       $6 = $0 + 44 | 0;
       $7 = $4 & -2 | 0;
       $4 = 0;
       label$6 : while (1) {
        HEAP32[$6 >> 2] = $1;
        HEAP8[($6 + 16 | 0) >> 0] = 0;
        i64toi32_i32$1 = $6 + 4 | 0;
        i64toi32_i32$0 = -1;
        HEAP32[i64toi32_i32$1 >> 2] = -2;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        HEAP8[($6 + -28 | 0) >> 0] = 0;
        i64toi32_i32$1 = $6 + -40 | 0;
        i64toi32_i32$0 = -1;
        HEAP32[i64toi32_i32$1 >> 2] = -2;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[($6 + -44 | 0) >> 2] = $1;
        $6 = $6 + 88 | 0;
        $4 = $4 + 2 | 0;
        if (($7 | 0) != ($4 | 0)) {
         continue label$6
        }
        break label$6;
       };
       if (!$5) {
        break label$4
       }
      }
      $6 = $0 + Math_imul($4, 44) | 0;
      HEAP8[($6 + 16 | 0) >> 0] = 0;
      i64toi32_i32$1 = $6;
      i64toi32_i32$0 = -1;
      HEAP32[($6 + 4 | 0) >> 2] = -2;
      HEAP32[($6 + 8 | 0) >> 2] = i64toi32_i32$0;
      HEAP32[$6 >> 2] = $1;
     }
     $6 = $0 + Math_imul($1, 44) | 0;
     HEAP32[($6 + 4 | 0) >> 2] = -1;
     $8 = $6 + 4 | 0;
     if (($1 | 0) < (1 | 0)) {
      break label$2
     }
     $9 = 0;
     $10 = 0;
     label$7 : while (1) {
      label$8 : {
       $6 = $0 + Math_imul($10, 44) | 0;
       if ((HEAP32[$6 >> 2] | 0 | 0) != ($1 | 0)) {
        break label$8
       }
       $4 = HEAP32[$8 >> 2] | 0;
       HEAP32[$8 >> 2] = $10;
       HEAP32[($6 + 8 | 0) >> 2] = $4;
       HEAP32[($6 + 12 | 0) >> 2] = $10;
       $6 = $10;
       label$9 : while (1) {
        label$10 : {
         $7 = $6;
         $11 = $0 + Math_imul($6, 44) | 0;
         if (HEAPU8[($11 + 16 | 0) >> 0] | 0) {
          break label$10
         }
         HEAP8[($11 + 16 | 0) >> 0] = 1;
         label$11 : {
          $6 = FUNCTION_TABLE[$2 | 0]($7, $3) | 0;
          if (($6 | 0) < (0 | 0)) {
           break label$11
          }
          $12 = $11 + 12 | 0;
          $5 = $11 + 4 | 0;
          label$12 : while (1) {
           label$13 : {
            $4 = $0 + Math_imul($6, 44) | 0;
            if ((HEAP32[($4 + 4 | 0) >> 2] | 0 | 0) != (-2 | 0)) {
             break label$13
            }
            HEAP32[($4 + 4 | 0) >> 2] = -1;
            HEAP32[($4 + 8 | 0) >> 2] = HEAP32[$5 >> 2] | 0;
            HEAP32[$4 >> 2] = $7;
            HEAP32[($4 + 12 | 0) >> 2] = HEAP32[$12 >> 2] | 0;
            HEAP32[$5 >> 2] = $6;
           }
           $9 = $9 + (($6 | 0) > ($7 | 0)) | 0;
           $4 = FUNCTION_TABLE[$2 | 0](-1, $3) | 0;
           $6 = $4;
           if (($4 | 0) > (-1 | 0)) {
            continue label$12
           }
           break label$12;
          };
         }
         $6 = HEAP32[($11 + 4 | 0) >> 2] | 0;
         if (($6 | 0) > (-1 | 0)) {
          continue label$9
         }
        }
        if (($7 | 0) == ($10 | 0)) {
         break label$8
        }
        $6 = HEAP32[($11 + 8 | 0) >> 2] | 0;
        if (($6 | 0) > (-1 | 0)) {
         continue label$9
        }
        $6 = HEAP32[$11 >> 2] | 0;
        continue label$9;
       };
      }
      $10 = $10 + 1 | 0;
      if (($10 | 0) != ($1 | 0)) {
       continue label$7
      }
      break label$7;
     };
     $4 = $1 & 7 | 0;
     $7 = 0;
     label$14 : {
      if (($1 + -1 | 0) >>> 0 < 7 >>> 0) {
       break label$14
      }
      $6 = $0 + 192 | 0;
      $5 = $1 & -8 | 0;
      $7 = 0;
      label$15 : while (1) {
       HEAP8[$6 >> 0] = 0;
       HEAP8[($6 + 132 | 0) >> 0] = 0;
       HEAP8[($6 + 88 | 0) >> 0] = 0;
       HEAP8[($6 + 44 | 0) >> 0] = 0;
       HEAP8[($6 + -44 | 0) >> 0] = 0;
       HEAP8[($6 + -88 | 0) >> 0] = 0;
       HEAP8[($6 + -132 | 0) >> 0] = 0;
       HEAP8[($6 + -176 | 0) >> 0] = 0;
       $6 = $6 + 352 | 0;
       $7 = $7 + 8 | 0;
       if (($5 | 0) != ($7 | 0)) {
        continue label$15
       }
       break label$15;
      };
     }
     $11 = 1;
     if (!$4) {
      break label$1
     }
     $6 = (Math_imul($7, 44) + $0 | 0) + 16 | 0;
     label$16 : while (1) {
      HEAP8[$6 >> 0] = 0;
      $6 = $6 + 44 | 0;
      $4 = $4 + -1 | 0;
      if ($4) {
       continue label$16
      }
      break label$1;
     };
    }
    $6 = $0 + Math_imul($1, 44) | 0;
    HEAP32[($6 + 4 | 0) >> 2] = -1;
    $8 = $6 + 4 | 0;
   }
   $9 = 0;
   $11 = 0;
  }
  $6 = $0 + Math_imul($1, 44) | 0;
  HEAP8[($6 + 16 | 0) >> 0] = 1;
  $10 = $6 + 16 | 0;
  $5 = 0;
  $6 = HEAP32[$8 >> 2] | 0;
  $7 = $6;
  label$17 : while (1) {
   label$18 : {
    $12 = $7;
    $4 = $0 + Math_imul($7, 44) | 0;
    if (HEAPU8[($4 + 16 | 0) >> 0] | 0) {
     break label$18
    }
    HEAP8[($4 + 16 | 0) >> 0] = 1;
    HEAP32[($4 + 24 | 0) >> 2] = $5;
    HEAP32[($4 + 20 | 0) >> 2] = $5;
    $5 = $5 + 1 | 0;
    $7 = HEAP32[($4 + 4 | 0) >> 2] | 0;
    if (($7 | 0) > (-1 | 0)) {
     continue label$17
    }
   }
   label$19 : {
    label$20 : {
     if (($12 | 0) != ($1 | 0)) {
      break label$20
     }
     label$21 : {
      if (!$11) {
       break label$21
      }
      $7 = $1 & 7 | 0;
      $5 = 0;
      label$22 : {
       $11 = $1 + -1 | 0;
       if ($11 >>> 0 < 7 >>> 0) {
        break label$22
       }
       $4 = $0 + 216 | 0;
       $12 = $1 & -8 | 0;
       $5 = 0;
       label$23 : while (1) {
        HEAP32[$4 >> 2] = -1;
        HEAP32[($4 + 132 | 0) >> 2] = -1;
        HEAP32[($4 + 88 | 0) >> 2] = -1;
        HEAP32[($4 + 44 | 0) >> 2] = -1;
        HEAP32[($4 + -44 | 0) >> 2] = -1;
        HEAP32[($4 + -88 | 0) >> 2] = -1;
        HEAP32[($4 + -132 | 0) >> 2] = -1;
        HEAP32[($4 + -176 | 0) >> 2] = -1;
        $4 = $4 + 352 | 0;
        $5 = $5 + 8 | 0;
        if (($12 | 0) != ($5 | 0)) {
         continue label$23
        }
        break label$23;
       };
      }
      label$24 : {
       if (!$7) {
        break label$24
       }
       $4 = (Math_imul($5, 44) + $0 | 0) + 40 | 0;
       label$25 : while (1) {
        HEAP32[$4 >> 2] = -1;
        $4 = $4 + 44 | 0;
        $7 = $7 + -1 | 0;
        if ($7) {
         continue label$25
        }
        break label$25;
       };
      }
      $7 = $1 & 7 | 0;
      $5 = 0;
      label$26 : {
       if ($11 >>> 0 < 7 >>> 0) {
        break label$26
       }
       $4 = $0 + 192 | 0;
       $12 = $1 & -8 | 0;
       $5 = 0;
       label$27 : while (1) {
        HEAP8[$4 >> 0] = 0;
        HEAP8[($4 + 132 | 0) >> 0] = 0;
        HEAP8[($4 + 88 | 0) >> 0] = 0;
        HEAP8[($4 + 44 | 0) >> 0] = 0;
        HEAP8[($4 + -44 | 0) >> 0] = 0;
        HEAP8[($4 + -88 | 0) >> 0] = 0;
        HEAP8[($4 + -132 | 0) >> 0] = 0;
        HEAP8[($4 + -176 | 0) >> 0] = 0;
        $4 = $4 + 352 | 0;
        $5 = $5 + 8 | 0;
        if (($12 | 0) != ($5 | 0)) {
         continue label$27
        }
        break label$27;
       };
      }
      if (!$7) {
       break label$21
      }
      $4 = (Math_imul($5, 44) + $0 | 0) + 16 | 0;
      label$28 : while (1) {
       HEAP8[$4 >> 0] = 0;
       $4 = $4 + 44 | 0;
       $7 = $7 + -1 | 0;
       if ($7) {
        continue label$28
       }
       break label$28;
      };
     }
     HEAP8[$10 >> 0] = 1;
     $10 = 0;
     label$29 : while (1) {
      label$30 : {
       $12 = $6;
       $4 = $0 + Math_imul($6, 44) | 0;
       if (HEAPU8[($4 + 16 | 0) >> 0] | 0) {
        break label$30
       }
       HEAP8[($4 + 16 | 0) >> 0] = 1;
       $6 = HEAP32[($4 + 24 | 0) >> 2] | 0;
       HEAP32[($4 + 36 | 0) >> 2] = $6;
       HEAP32[($4 + 32 | 0) >> 2] = $6;
       label$31 : {
        $6 = FUNCTION_TABLE[$2 | 0]($12, $3) | 0;
        if (($6 | 0) < (0 | 0)) {
         break label$31
        }
        $7 = $4 + 32 | 0;
        $5 = $4 + 36 | 0;
        label$32 : while (1) {
         label$33 : {
          if (($6 | 0) == (HEAP32[$4 >> 2] | 0 | 0)) {
           break label$33
          }
          label$34 : {
           $6 = HEAP32[(($0 + Math_imul($6, 44) | 0) + 20 | 0) >> 2] | 0;
           if ((HEAP32[$7 >> 2] | 0 | 0) <= ($6 | 0)) {
            break label$34
           }
           HEAP32[$7 >> 2] = $6;
          }
          if ((HEAP32[$5 >> 2] | 0 | 0) >= ($6 | 0)) {
           break label$33
          }
          HEAP32[$5 >> 2] = $6;
         }
         $6 = FUNCTION_TABLE[$2 | 0](-1, $3) | 0;
         if (($6 | 0) > (-1 | 0)) {
          continue label$32
         }
         break label$32;
        };
       }
       $6 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       if (($6 | 0) > (-1 | 0)) {
        continue label$29
       }
      }
      if (($12 | 0) == ($1 | 0)) {
       break label$19
      }
      label$35 : {
       $6 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       if (($6 | 0) < (0 | 0)) {
        break label$35
       }
       $5 = $4 + 36 | 0;
       $11 = $4 + 32 | 0;
       $12 = HEAP32[($4 + 32 | 0) >> 2] | 0;
       label$36 : while (1) {
        label$37 : {
         $6 = $0 + Math_imul($6, 44) | 0;
         $7 = HEAP32[($6 + 32 | 0) >> 2] | 0;
         if (($12 | 0) <= ($7 | 0)) {
          break label$37
         }
         HEAP32[$11 >> 2] = $7;
         $12 = $7;
        }
        label$38 : {
         $7 = HEAP32[($6 + 36 | 0) >> 2] | 0;
         if ((HEAP32[$5 >> 2] | 0 | 0) >= ($7 | 0)) {
          break label$38
         }
         HEAP32[$5 >> 2] = $7;
        }
        $6 = HEAP32[($6 + 8 | 0) >> 2] | 0;
        if (($6 | 0) > (-1 | 0)) {
         continue label$36
        }
        break label$36;
       };
      }
      label$39 : {
       $6 = HEAP32[$4 >> 2] | 0;
       if (($6 | 0) == ($1 | 0)) {
        break label$39
       }
       if ((HEAP32[($4 + 32 | 0) >> 2] | 0 | 0) < (HEAP32[($4 + 24 | 0) >> 2] | 0 | 0)) {
        break label$39
       }
       if ((HEAP32[($4 + 36 | 0) >> 2] | 0 | 0) > (HEAP32[($4 + 28 | 0) >> 2] | 0 | 0)) {
        break label$39
       }
       HEAP32[($4 + 40 | 0) >> 2] = $6;
       $10 = $10 + 1 | 0;
      }
      $4 = HEAP32[($4 + 8 | 0) >> 2] | 0;
      $6 = ($4 | 0) < (0 | 0) ? $6 : $4;
      continue label$29;
     };
    }
    HEAP32[($4 + 28 | 0) >> 2] = $5 + -1 | 0;
    $7 = HEAP32[($4 + 8 | 0) >> 2] | 0;
    if (($7 | 0) > (-1 | 0)) {
     continue label$17
    }
    $7 = HEAP32[$4 >> 2] | 0;
    continue label$17;
   }
   break label$17;
  };
  return ($10 | 0) < ($9 | 0) | 0;
 }
 
 function shuffle($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $7 = 0, $3 = 0, $5 = 0, $6 = 0;
  $3 = __stack_pointer - 512 | 0;
  __stack_pointer = $3;
  label$1 : {
   if (($1 | 0) < (2 | 0)) {
    break label$1
   }
   label$2 : {
    if (($2 | 0) > (0 | 0)) {
     break label$2
    }
    label$3 : while (1) {
     undefined_weak_JS_random_upto($1 | 0) | 0;
     $1 = $1 + -1 | 0;
     if (($1 | 0) > (1 | 0)) {
      continue label$3
     }
     break label$1;
    };
   }
   $4 = $1 + -1 | 0;
   label$4 : while (1) {
    label$5 : {
     $1 = undefined_weak_JS_random_upto($1 | 0) | 0;
     $5 = $4;
     if (($1 | 0) == ($5 | 0)) {
      break label$5
     }
     $4 = $0 + Math_imul($1, $2) | 0;
     $6 = $0 + Math_imul($5, $2) | 0;
     $7 = $2;
     label$6 : while (1) {
      $1 = $7 >>> 0 < 512 >>> 0 ? $7 : 512;
      wasm2js_memory_copy($3, $6, $1);
      wasm2js_memory_copy($6, $4, $1);
      wasm2js_memory_copy($4, $3, $1);
      $4 = $4 + $1 | 0;
      $6 = $6 + $1 | 0;
      $7 = $7 - $1 | 0;
      if (($7 | 0) > (0 | 0)) {
       continue label$6
      }
      break label$6;
     };
    }
    $4 = $5 + -1 | 0;
    $1 = $5;
    if (($1 | 0) > (1 | 0)) {
     continue label$4
    }
    break label$4;
   };
  }
  __stack_pointer = $3 + 512 | 0;
 }
 
 function new_game_desc($0) {
  $0 = $0 | 0;
  var $21 = 0, $34 = 0, $35 = 0, $33 = 0, $36 = 0, $37 = 0, $1 = 0, $38 = 0, $39 = 0, $43 = 0, $4 = 0, $40 = 0, i64toi32_i32$0 = 0, $42 = 0, $5 = 0, $41 = 0, $2 = 0, $58 = 0, $3 = 0, i64toi32_i32$1 = 0, $74 = 0, $72 = 0, $47 = 0, $73 = 0, $71 = 0, $50 = 0, $45 = 0, $52 = 0, $46 = 0, $49 = 0, $54 = 0, $77 = 0, $6 = 0, $25 = 0, $56 = 0, $62 = 0, $8 = 0, $12 = 0, $18 = 0, $53 = 0, $75 = 0, $29 = 0, $31 = 0, $63 = 0, $65 = 0, $17 = 0, $23 = 0, $92 = 0, $93 = 0, $48 = 0, $94 = 0, $95 = 0, $51 = 0, $55 = 0, $66 = 0, $78 = Math_fround(0), $20 = 0, $64 = 0, $7 = 0, $13 = 0, $14 = 0, $28 = 0, $44 = 0, $57 = 0, $59 = 0, $60 = 0, $61 = 0, $76 = 0, $79 = Math_fround(0), $9 = 0, $10 = 0, $11 = 0, $15 = 0, $16 = 0, $19 = 0, $22 = 0, $24 = 0, $26 = 0, $27 = 0, $30 = 0, $32 = 0, $810 = 0, $844 = 0, $882 = 0, $922 = 0, $982 = 0, $1046 = 0, $67 = 0, $68 = 0, $69 = 0, $70 = 0, $2396 = 0, $2447 = 0, $3702 = 0, $4118 = 0;
  $1 = __stack_pointer - 96 | 0;
  __stack_pointer = $1;
  $2 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  $3 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
  $4 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
  $5 = Math_imul($3, $4);
  $6 = $2 + $5 | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $6 + $5 | 0;
  $7 = Math_imul($4, 5);
  $8 = $3 + -1 | 0;
  $9 = Math_imul($7, $8);
  $10 = $3 & -2 | 0;
  $11 = $4 & -2 | 0;
  $12 = $4 + -1 | 0;
  $13 = 0 - $5 | 0;
  $14 = Math_imul($4, 10);
  $15 = $14 + -4 | 0;
  $16 = $5 & -8 | 0;
  $17 = $5 & 7 | 0;
  $18 = $5 + -1 | 0;
  $19 = Math_imul($8, $4);
  $20 = $5 << 2 | 0;
  $21 = Math_imul($5, 5);
  $22 = $21 + 3 | 0;
  $23 = $5 + 1 | 0;
  $24 = $23 << 2 | 0;
  $25 = $21 + 4 | 0;
  $26 = $25 & -8 | 0;
  $27 = $25 & 7 | 0;
  $28 = $25 << 2 | 0;
  $29 = ($4 | 0) / (2 | 0) | 0;
  $30 = ($29 + 1 | 0 | 0) >= ($4 | 0);
  $31 = ($3 | 0) / (2 | 0) | 0;
  $32 = ($31 + 1 | 0 | 0) >= ($3 | 0);
  label$1 : while (1) {
   label$2 : {
    if (!$5) {
     break label$2
    }
    label$3 : {
     label$4 : {
      $33 = $5 & 7 | 0;
      if ($33) {
       break label$4
      }
      $21 = $2;
      $34 = $5;
      break label$3;
     }
     $35 = $17;
     $21 = $2;
     $34 = $5;
     label$5 : while (1) {
      HEAP8[$21 >> 0] = 0;
      $21 = $21 + 1 | 0;
      $34 = $34 + -1 | 0;
      $35 = $35 + -1 | 0;
      if ($35) {
       continue label$5
      }
      break label$5;
     };
    }
    label$6 : {
     $36 = $18 >>> 0 < 7 >>> 0;
     if ($36) {
      break label$6
     }
     label$7 : while (1) {
      i64toi32_i32$1 = $21;
      i64toi32_i32$0 = 0;
      $92 = 0;
      HEAP8[$21 >> 0] = $92;
      HEAP8[($21 + 1 | 0) >> 0] = $92 >>> 8 | 0;
      HEAP8[($21 + 2 | 0) >> 0] = $92 >>> 16 | 0;
      HEAP8[($21 + 3 | 0) >> 0] = $92 >>> 24 | 0;
      HEAP8[($21 + 4 | 0) >> 0] = i64toi32_i32$0;
      HEAP8[($21 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
      HEAP8[($21 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
      HEAP8[($21 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
      $21 = $21 + 8 | 0;
      $34 = $34 + -8 | 0;
      if ($34) {
       continue label$7
      }
      break label$7;
     };
    }
    label$8 : {
     label$9 : {
      if ($33) {
       break label$9
      }
      $21 = $6;
      $34 = $5;
      break label$8;
     }
     $35 = $17;
     $21 = $6;
     $34 = $5;
     label$10 : while (1) {
      HEAP8[$21 >> 0] = 0;
      $21 = $21 + 1 | 0;
      $34 = $34 + -1 | 0;
      $35 = $35 + -1 | 0;
      if ($35) {
       continue label$10
      }
      break label$10;
     };
    }
    if ($36) {
     break label$2
    }
    label$11 : while (1) {
     i64toi32_i32$1 = $21;
     i64toi32_i32$0 = 0;
     $93 = 0;
     HEAP8[$21 >> 0] = $93;
     HEAP8[($21 + 1 | 0) >> 0] = $93 >>> 8 | 0;
     HEAP8[($21 + 2 | 0) >> 0] = $93 >>> 16 | 0;
     HEAP8[($21 + 3 | 0) >> 0] = $93 >>> 24 | 0;
     HEAP8[($21 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[($21 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[($21 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[($21 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     $21 = $21 + 8 | 0;
     $34 = $34 + -8 | 0;
     if ($34) {
      continue label$11
     }
     break label$11;
    };
   }
   $36 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
   HEAP32[($36 + 4 | 0) >> 2] = 1;
   HEAP32[$36 >> 2] = 0;
   $21 = $36 + 8 | 0;
   HEAP32[(0 + 1104 | 0) >> 2] = $21;
   label$12 : {
    if ($30) {
     break label$12
    }
    HEAP32[(0 + 1104 | 0) >> 2] = $36 + 20 | 0;
    HEAP32[($36 + 16 | 0) >> 2] = 1;
    HEAP32[($36 + 12 | 0) >> 2] = $31;
    HEAP32[$21 >> 2] = $29;
    add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
   }
   label$13 : {
    if (($3 | 0) < (2 | 0)) {
     break label$13
    }
    $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
    HEAP32[($21 + 8 | 0) >> 2] = 2;
    HEAP32[($21 + 4 | 0) >> 2] = $31;
    HEAP32[$21 >> 2] = $29;
    if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
     break label$13
    }
    add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
   }
   label$14 : {
    if (($4 | 0) < (2 | 0)) {
     break label$14
    }
    $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
    HEAP32[($21 + 8 | 0) >> 2] = 4;
    HEAP32[($21 + 4 | 0) >> 2] = $31;
    HEAP32[$21 >> 2] = $29;
    if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
     break label$14
    }
    add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
   }
   label$15 : {
    if ($32) {
     break label$15
    }
    $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
    HEAP32[($21 + 8 | 0) >> 2] = 8;
    HEAP32[($21 + 4 | 0) >> 2] = $31;
    HEAP32[$21 >> 2] = $29;
    if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
     break label$15
    }
    add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
   }
   label$16 : {
    label$17 : {
     $21 = HEAP32[$36 >> 2] | 0;
     if ($21) {
      break label$17
     }
     $21 = 0;
     break label$16;
    }
    $34 = HEAP32[($21 + 24 | 0) >> 2] | 0;
    $35 = HEAP32[($21 + 20 | 0) >> 2] | 0;
    $33 = HEAP32[($21 + 28 | 0) >> 2] | 0;
    $37 = HEAP32[($21 + 32 | 0) >> 2] | 0;
    $38 = HEAP32[($21 + 36 | 0) >> 2] | 0;
    $39 = HEAP32[($21 + 40 | 0) >> 2] | 0;
    $40 = HEAP32[($21 + 44 | 0) >> 2] | 0;
    if ((((((($34 + $35 | 0) + $33 | 0) + $37 | 0) + (($38 | 0) != (0 | 0)) | 0) + (($39 | 0) != (0 | 0)) | 0) + (($40 | 0) != (0 | 0)) | 0 | 0) < (1 | 0)) {
     break label$16
    }
    label$18 : while (1) {
     $21 = delpos234_internal($36 | 0, undefined_weak_JS_random_upto(((((($34 + $35 | 0) + $33 | 0) + $37 | 0) + (($38 | 0) != (0 | 0)) | 0) + (($39 | 0) != (0 | 0)) | 0) + (($40 | 0) != (0 | 0)) | 0 | 0) | 0 | 0) | 0;
     $33 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
     $37 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     $34 = HEAP32[($21 + 4 | 0) >> 2] | 0;
     $35 = HEAP32[$21 >> 2] | 0;
     $38 = $2 + (Math_imul($37, $34) + $35 | 0) | 0;
     $21 = HEAP32[($21 + 8 | 0) >> 2] | 0;
     HEAP8[$38 >> 0] = HEAPU8[$38 >> 0] | 0 | $21 | 0;
     $38 = ($33 + ($34 + (($21 | 0) == (8 | 0) ? 1 : ($21 | 0) == (2 | 0) ? -1 : 0) | 0) | 0 | 0) % ($33 | 0) | 0;
     $37 = (($37 + $35 | 0) + (($21 | 0) == (1 | 0) ? 1 : ($21 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($37 | 0) | 0;
     $33 = $2 + (Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, $38) + $37 | 0) | 0;
     $39 = ($21 >>> 2 | 0) & 3 | 0 | (($21 << 2 | 0) & 12 | 0) | 0;
     HEAP8[$33 >> 0] = HEAPU8[$33 >> 0] | 0 | $39 | 0;
     label$19 : {
      $33 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
      $40 = $2 + ($35 + Math_imul($34, $33) | 0) | 0;
      $21 = HEAPU8[$40 >> 0] | 0;
      if (((((($21 >>> 2 | 0) & 1 | 0) + ($21 & 1 | 0) | 0) + (($21 >>> 3 | 0) & 1 | 0) | 0) + (($21 >>> 1 | 0) & 1 | 0) | 0 | 0) != (3 | 0)) {
       break label$19
      }
      HEAP32[($1 + 52 | 0) >> 2] = $34;
      HEAP32[($1 + 48 | 0) >> 2] = $35;
      HEAP32[($1 + 56 | 0) >> 2] = (HEAPU8[$40 >> 0] | 0) ^ 15 | 0;
      label$20 : {
       $21 = HEAP32[$36 >> 2] | 0;
       if (!$21) {
        break label$20
       }
       $33 = HEAP32[($36 + 4 | 0) >> 2] | 0;
       label$21 : while (1) {
        label$22 : {
         label$23 : {
          $35 = HEAP32[($21 + 36 | 0) >> 2] | 0;
          if ($35) {
           break label$23
          }
          $34 = 0;
          break label$22;
         }
         $34 = 0;
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$22
         }
         label$24 : {
          label$25 : {
           if ($35) {
            break label$25
           }
           $34 = 0;
           break label$24;
          }
          $34 = 1;
          $35 = HEAP32[($21 + 40 | 0) >> 2] | 0;
          if (!$35) {
           break label$22
          }
          $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
          if (($35 | 0) < (0 | 0)) {
           break label$22
          }
          label$26 : {
           if ($35) {
            break label$26
           }
           $34 = 1;
           break label$24;
          }
          $34 = 2;
          $35 = HEAP32[($21 + 44 | 0) >> 2] | 0;
          if (!$35) {
           break label$22
          }
          $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
          if (($35 | 0) < (0 | 0)) {
           break label$22
          }
          $34 = 3;
          if ($35) {
           break label$22
          }
          $34 = 2;
         }
         $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
         if (!$21) {
          break label$20
         }
         del234($36 | 0, $21 | 0) | 0;
         break label$20;
        }
        $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
        if ($21) {
         continue label$21
        }
        break label$21;
       };
      }
      $33 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     }
     HEAP32[($1 + 56 | 0) >> 2] = 4;
     $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
     HEAP32[($1 + 52 | 0) >> 2] = ($38 + $21 | 0 | 0) % ($21 | 0) | 0;
     $41 = $37 + 1 | 0;
     HEAP32[($1 + 48 | 0) >> 2] = ($41 + $33 | 0 | 0) % ($33 | 0) | 0;
     label$27 : {
      $21 = HEAP32[$36 >> 2] | 0;
      if (!$21) {
       break label$27
      }
      $33 = HEAP32[($36 + 4 | 0) >> 2] | 0;
      label$28 : while (1) {
       label$29 : {
        label$30 : {
         $35 = HEAP32[($21 + 36 | 0) >> 2] | 0;
         if ($35) {
          break label$30
         }
         $34 = 0;
         break label$29;
        }
        $34 = 0;
        $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
        if (($35 | 0) < (0 | 0)) {
         break label$29
        }
        label$31 : {
         label$32 : {
          if ($35) {
           break label$32
          }
          $34 = 0;
          break label$31;
         }
         $34 = 1;
         $35 = HEAP32[($21 + 40 | 0) >> 2] | 0;
         if (!$35) {
          break label$29
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$29
         }
         label$33 : {
          if ($35) {
           break label$33
          }
          $34 = 1;
          break label$31;
         }
         $34 = 2;
         $35 = HEAP32[($21 + 44 | 0) >> 2] | 0;
         if (!$35) {
          break label$29
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$29
         }
         $34 = 3;
         if ($35) {
          break label$29
         }
         $34 = 2;
        }
        $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
        if (!$21) {
         break label$27
        }
        del234($36 | 0, $21 | 0) | 0;
        break label$27;
       }
       $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if ($21) {
        continue label$28
       }
       break label$28;
      };
     }
     HEAP32[($1 + 56 | 0) >> 2] = 8;
     $40 = $38 + -1 | 0;
     $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
     HEAP32[($1 + 52 | 0) >> 2] = ($40 + $21 | 0 | 0) % ($21 | 0) | 0;
     $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     HEAP32[($1 + 48 | 0) >> 2] = ($37 + $21 | 0 | 0) % ($21 | 0) | 0;
     label$34 : {
      $21 = HEAP32[$36 >> 2] | 0;
      if (!$21) {
       break label$34
      }
      $33 = HEAP32[($36 + 4 | 0) >> 2] | 0;
      label$35 : while (1) {
       label$36 : {
        label$37 : {
         $35 = HEAP32[($21 + 36 | 0) >> 2] | 0;
         if ($35) {
          break label$37
         }
         $34 = 0;
         break label$36;
        }
        $34 = 0;
        $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
        if (($35 | 0) < (0 | 0)) {
         break label$36
        }
        label$38 : {
         label$39 : {
          if ($35) {
           break label$39
          }
          $34 = 0;
          break label$38;
         }
         $34 = 1;
         $35 = HEAP32[($21 + 40 | 0) >> 2] | 0;
         if (!$35) {
          break label$36
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$36
         }
         label$40 : {
          if ($35) {
           break label$40
          }
          $34 = 1;
          break label$38;
         }
         $34 = 2;
         $35 = HEAP32[($21 + 44 | 0) >> 2] | 0;
         if (!$35) {
          break label$36
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$36
         }
         $34 = 3;
         if ($35) {
          break label$36
         }
         $34 = 2;
        }
        $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
        if (!$21) {
         break label$34
        }
        del234($36 | 0, $21 | 0) | 0;
        break label$34;
       }
       $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if ($21) {
        continue label$35
       }
       break label$35;
      };
     }
     HEAP32[($1 + 56 | 0) >> 2] = 1;
     $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
     HEAP32[($1 + 52 | 0) >> 2] = ($38 + $21 | 0 | 0) % ($21 | 0) | 0;
     $42 = $37 + -1 | 0;
     $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     HEAP32[($1 + 48 | 0) >> 2] = ($42 + $21 | 0 | 0) % ($21 | 0) | 0;
     label$41 : {
      $21 = HEAP32[$36 >> 2] | 0;
      if (!$21) {
       break label$41
      }
      $33 = HEAP32[($36 + 4 | 0) >> 2] | 0;
      label$42 : while (1) {
       label$43 : {
        label$44 : {
         $35 = HEAP32[($21 + 36 | 0) >> 2] | 0;
         if ($35) {
          break label$44
         }
         $34 = 0;
         break label$43;
        }
        $34 = 0;
        $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
        if (($35 | 0) < (0 | 0)) {
         break label$43
        }
        label$45 : {
         label$46 : {
          if ($35) {
           break label$46
          }
          $34 = 0;
          break label$45;
         }
         $34 = 1;
         $35 = HEAP32[($21 + 40 | 0) >> 2] | 0;
         if (!$35) {
          break label$43
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$43
         }
         label$47 : {
          if ($35) {
           break label$47
          }
          $34 = 1;
          break label$45;
         }
         $34 = 2;
         $35 = HEAP32[($21 + 44 | 0) >> 2] | 0;
         if (!$35) {
          break label$43
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$43
         }
         $34 = 3;
         if ($35) {
          break label$43
         }
         $34 = 2;
        }
        $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
        if (!$21) {
         break label$41
        }
        del234($36 | 0, $21 | 0) | 0;
        break label$41;
       }
       $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if ($21) {
        continue label$42
       }
       break label$42;
      };
     }
     HEAP32[($1 + 56 | 0) >> 2] = 2;
     $43 = $38 + 1 | 0;
     $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
     HEAP32[($1 + 52 | 0) >> 2] = ($43 + $21 | 0 | 0) % ($21 | 0) | 0;
     $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     HEAP32[($1 + 48 | 0) >> 2] = ($37 + $21 | 0 | 0) % ($21 | 0) | 0;
     label$48 : {
      $21 = HEAP32[$36 >> 2] | 0;
      if (!$21) {
       break label$48
      }
      $33 = HEAP32[($36 + 4 | 0) >> 2] | 0;
      label$49 : while (1) {
       label$50 : {
        label$51 : {
         $35 = HEAP32[($21 + 36 | 0) >> 2] | 0;
         if ($35) {
          break label$51
         }
         $34 = 0;
         break label$50;
        }
        $34 = 0;
        $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
        if (($35 | 0) < (0 | 0)) {
         break label$50
        }
        label$52 : {
         label$53 : {
          if ($35) {
           break label$53
          }
          $34 = 0;
          break label$52;
         }
         $34 = 1;
         $35 = HEAP32[($21 + 40 | 0) >> 2] | 0;
         if (!$35) {
          break label$50
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$50
         }
         label$54 : {
          if ($35) {
           break label$54
          }
          $34 = 1;
          break label$52;
         }
         $34 = 2;
         $35 = HEAP32[($21 + 44 | 0) >> 2] | 0;
         if (!$35) {
          break label$50
         }
         $35 = FUNCTION_TABLE[$33 | 0]($1 + 48 | 0, $35) | 0;
         if (($35 | 0) < (0 | 0)) {
          break label$50
         }
         $34 = 3;
         if ($35) {
          break label$50
         }
         $34 = 2;
        }
        $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
        if (!$21) {
         break label$48
        }
        del234($36 | 0, $21 | 0) | 0;
        break label$48;
       }
       $21 = HEAP32[(($21 + ($34 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if ($21) {
        continue label$49
       }
       break label$49;
      };
     }
     label$55 : {
      label$56 : {
       label$57 : {
        if (!$38) {
         break label$57
        }
        label$58 : {
         label$59 : {
          label$60 : {
           if (($39 | 0) == (1 | 0)) {
            break label$60
           }
           label$61 : {
            label$62 : {
             if (($37 | 0) != ($12 | 0)) {
              break label$62
             }
             if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
              break label$61
             }
            }
            $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
            $810 = ($38 + $21 | 0 | 0) % ($21 | 0) | 0;
            $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
            if (HEAPU8[($2 + (Math_imul($810, $21) + (($41 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) | 0) >> 0] | 0) {
             break label$61
            }
            $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
            HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
            HEAP32[($21 + 8 | 0) >> 2] = 1;
            HEAP32[($21 + 4 | 0) >> 2] = $38;
            HEAP32[$21 >> 2] = $37;
            if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
             break label$61
            }
            add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
           }
           if (($39 | 0) == (2 | 0)) {
            break label$59
           }
          }
          label$63 : {
           $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
           $844 = ($40 + $21 | 0 | 0) % ($21 | 0) | 0;
           $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
           if (HEAPU8[($2 + (Math_imul($844, $21) + (($37 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) | 0) >> 0] | 0) {
            break label$63
           }
           $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
           HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
           HEAP32[($21 + 8 | 0) >> 2] = 2;
           HEAP32[($21 + 4 | 0) >> 2] = $38;
           HEAP32[$21 >> 2] = $37;
           if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
            break label$63
           }
           add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
          }
          if (($39 | 0) == (4 | 0)) {
           break label$58
          }
         }
         label$64 : {
          label$65 : {
           if ($37) {
            break label$65
           }
           if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
            break label$64
           }
          }
          $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
          $882 = ($38 + $21 | 0 | 0) % ($21 | 0) | 0;
          $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
          if (HEAPU8[($2 + (Math_imul($882, $21) + (($42 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) | 0) >> 0] | 0) {
           break label$64
          }
          $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
          HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
          HEAP32[($21 + 8 | 0) >> 2] = 4;
          HEAP32[($21 + 4 | 0) >> 2] = $38;
          HEAP32[$21 >> 2] = $37;
          if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
           break label$64
          }
          add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
         }
         if (($39 | 0) == (8 | 0)) {
          break label$55
         }
        }
        label$66 : {
         if (($38 | 0) != ($8 | 0)) {
          break label$66
         }
         if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
          break label$55
         }
        }
        $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
        $922 = ($43 + $21 | 0 | 0) % ($21 | 0) | 0;
        $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
        if (HEAPU8[($2 + (Math_imul($922, $21) + (($37 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) | 0) >> 0] | 0) {
         break label$55
        }
        $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
        HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
        HEAP32[($21 + 8 | 0) >> 2] = 8;
        HEAP32[($21 + 4 | 0) >> 2] = $38;
        HEAP32[$21 >> 2] = $37;
        if (HEAP32[($36 + 4 | 0) >> 2] | 0) {
         break label$56
        }
        break label$55;
       }
       label$67 : {
        label$68 : {
         label$69 : {
          if (($39 | 0) == (1 | 0)) {
           break label$69
          }
          label$70 : {
           label$71 : {
            if (($37 | 0) != ($12 | 0)) {
             break label$71
            }
            if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
             break label$70
            }
           }
           $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
           if (HEAPU8[($2 + (($41 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) >> 0] | 0) {
            break label$70
           }
           $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
           HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
           i64toi32_i32$1 = $21;
           i64toi32_i32$0 = 1;
           HEAP32[($21 + 4 | 0) >> 2] = 0;
           HEAP32[($21 + 8 | 0) >> 2] = i64toi32_i32$0;
           HEAP32[$21 >> 2] = $37;
           if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
            break label$70
           }
           add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
          }
          if (($39 | 0) == (2 | 0)) {
           break label$68
          }
         }
         label$72 : {
          if (!(HEAPU8[(1088 + 8 | 0) >> 0] | 0)) {
           break label$72
          }
          $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
          $982 = ($21 + -1 | 0 | 0) % ($21 | 0) | 0;
          $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
          if (HEAPU8[($2 + (Math_imul($982, $21) + (($37 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) | 0) >> 0] | 0) {
           break label$72
          }
          $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
          HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
          i64toi32_i32$1 = $21;
          i64toi32_i32$0 = 2;
          HEAP32[($21 + 4 | 0) >> 2] = 0;
          HEAP32[($21 + 8 | 0) >> 2] = i64toi32_i32$0;
          HEAP32[$21 >> 2] = $37;
          if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
           break label$72
          }
          add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
         }
         if (($39 | 0) == (4 | 0)) {
          break label$67
         }
        }
        label$73 : {
         label$74 : {
          if ($37) {
           break label$74
          }
          if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
           break label$73
          }
         }
         $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
         if (HEAPU8[($2 + (($42 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) >> 0] | 0) {
          break label$73
         }
         $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
         HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
         i64toi32_i32$1 = $21;
         i64toi32_i32$0 = 4;
         HEAP32[($21 + 4 | 0) >> 2] = 0;
         HEAP32[($21 + 8 | 0) >> 2] = i64toi32_i32$0;
         HEAP32[$21 >> 2] = $37;
         if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
          break label$73
         }
         add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
        }
        if (($39 | 0) == (8 | 0)) {
         break label$55
        }
       }
       label$75 : {
        if (($38 | 0) != ($8 | 0)) {
         break label$75
        }
        if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
         break label$55
        }
       }
       $21 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
       $1046 = ($21 + 1 | 0 | 0) % ($21 | 0) | 0;
       $21 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
       if (HEAPU8[($2 + (Math_imul($1046, $21) + (($37 + $21 | 0 | 0) % ($21 | 0) | 0) | 0) | 0) >> 0] | 0) {
        break label$55
       }
       $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
       i64toi32_i32$1 = $21;
       i64toi32_i32$0 = 8;
       HEAP32[($21 + 4 | 0) >> 2] = 0;
       HEAP32[($21 + 8 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[$21 >> 2] = $37;
       if (!(HEAP32[($36 + 4 | 0) >> 2] | 0)) {
        break label$55
       }
      }
      add234_internal($36 | 0, $21 | 0, -1 | 0) | 0;
     }
     $21 = HEAP32[$36 >> 2] | 0;
     if (!$21) {
      break label$16
     }
     $34 = HEAP32[($21 + 24 | 0) >> 2] | 0;
     $35 = HEAP32[($21 + 20 | 0) >> 2] | 0;
     $33 = HEAP32[($21 + 28 | 0) >> 2] | 0;
     $37 = HEAP32[($21 + 32 | 0) >> 2] | 0;
     $38 = HEAP32[($21 + 36 | 0) >> 2] | 0;
     $39 = HEAP32[($21 + 40 | 0) >> 2] | 0;
     $40 = HEAP32[($21 + 44 | 0) >> 2] | 0;
     if ((((((($34 + $35 | 0) + $33 | 0) + $37 | 0) + (($38 | 0) != (0 | 0)) | 0) + (($39 | 0) != (0 | 0)) | 0) + (($40 | 0) != (0 | 0)) | 0 | 0) >= (1 | 0)) {
      continue label$18
     }
     break label$18;
    };
   }
   freenode234($21 | 0);
   label$76 : {
    if (!(HEAPU8[(1088 + 9 | 0) >> 0] | 0)) {
     break label$76
    }
    $35 = -1;
    label$77 : while (1) {
     $44 = $35;
     $45 = 0;
     $46 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     $47 = $46 + $20 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $47;
     $42 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
     label$78 : {
      $48 = ($5 | 0) < (1 | 0);
      if ($48) {
       break label$78
      }
      $45 = 0;
      $33 = $2;
      $21 = $46;
      $38 = $5;
      label$79 : while (1) {
       $39 = HEAPU8[$33 >> 0] | 0;
       $35 = $39 & 15 | 0;
       HEAP8[$21 >> 0] = $35;
       $36 = 255;
       $37 = 255;
       $34 = 255;
       label$80 : {
        $40 = ($39 << 1 | 0) & 14 | 0;
        $39 = $35 >>> 3 | 0 | $40 | 0;
        if (($39 | 0) == ($35 | 0)) {
         break label$80
        }
        $34 = ($39 << 1 | 0) & 14 | 0 | ($40 >>> 3 | 0) | 0;
        $34 = ($34 | 0) == ($35 | 0) ? -1 : $34;
        $37 = $39;
       }
       HEAP8[($21 + 2 | 0) >> 0] = $34;
       HEAP8[($21 + 1 | 0) >> 0] = $37;
       label$81 : {
        if (($34 & 255 | 0 | 0) == (255 | 0)) {
         break label$81
        }
        $34 = ($34 << 1 | 0) & 14 | 0 | (($34 >>> 3 | 0) & 1 | 0) | 0;
        $36 = ($34 | 0) == ($35 | 0) ? -1 : $34;
       }
       HEAP8[($21 + 3 | 0) >> 0] = $36;
       $21 = $21 + 4 | 0;
       $45 = $45 + ((HEAPU8[$33 >> 0] | 0 | 0) != (0 | 0)) | 0;
       $33 = $33 + 1 | 0;
       $38 = $38 + -1 | 0;
       if ($38) {
        continue label$79
       }
       break label$79;
      };
      $47 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     }
     $49 = $47 + $25 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $49;
     label$82 : {
      label$83 : {
       if (!$25) {
        break label$83
       }
       label$84 : {
        label$85 : {
         $33 = $25 & 7 | 0;
         if ($33) {
          break label$85
         }
         $21 = $47;
         $34 = $25;
         break label$84;
        }
        $35 = $27;
        $21 = $47;
        $34 = $25;
        label$86 : while (1) {
         HEAP8[$21 >> 0] = 0;
         $21 = $21 + 1 | 0;
         $34 = $34 + -1 | 0;
         $35 = $35 + -1 | 0;
         if ($35) {
          continue label$86
         }
         break label$86;
        };
       }
       label$87 : {
        $36 = $22 >>> 0 < 7 >>> 0;
        if ($36) {
         break label$87
        }
        label$88 : while (1) {
         i64toi32_i32$1 = $21;
         i64toi32_i32$0 = 0;
         $94 = 0;
         HEAP8[$21 >> 0] = $94;
         HEAP8[($21 + 1 | 0) >> 0] = $94 >>> 8 | 0;
         HEAP8[($21 + 2 | 0) >> 0] = $94 >>> 16 | 0;
         HEAP8[($21 + 3 | 0) >> 0] = $94 >>> 24 | 0;
         HEAP8[($21 + 4 | 0) >> 0] = i64toi32_i32$0;
         HEAP8[($21 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
         HEAP8[($21 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
         HEAP8[($21 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
         $21 = $21 + 8 | 0;
         $34 = $34 + -8 | 0;
         if ($34) {
          continue label$88
         }
         break label$88;
        };
       }
       $49 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       $21 = $49 + $28 | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $21;
       if (($25 | 0) <= (0 | 0)) {
        break label$82
       }
       $34 = $45 + 1 | 0;
       $35 = 0;
       label$89 : {
        if ($36) {
         break label$89
        }
        $21 = $49 + 16 | 0;
        $35 = 0;
        label$90 : while (1) {
         HEAP32[$21 >> 2] = $34;
         HEAP32[($21 + 12 | 0) >> 2] = $34;
         HEAP32[($21 + 8 | 0) >> 2] = $34;
         HEAP32[($21 + 4 | 0) >> 2] = $34;
         HEAP32[($21 + -4 | 0) >> 2] = $34;
         HEAP32[($21 + -8 | 0) >> 2] = $34;
         HEAP32[($21 + -12 | 0) >> 2] = $34;
         HEAP32[($21 + -16 | 0) >> 2] = $34;
         $21 = $21 + 32 | 0;
         $35 = $35 + 8 | 0;
         if (($26 | 0) != ($35 | 0)) {
          continue label$90
         }
         break label$90;
        };
       }
       label$91 : {
        if (!$33) {
         break label$91
        }
        $21 = $49 + ($35 << 2 | 0) | 0;
        label$92 : while (1) {
         HEAP32[$21 >> 2] = $34;
         $21 = $21 + 4 | 0;
         $33 = $33 + -1 | 0;
         if ($33) {
          continue label$92
         }
         break label$92;
        };
       }
       $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       break label$82;
      }
      $21 = $49 + $28 | 0;
      HEAP32[(0 + 1104 | 0) >> 2] = $21;
     }
     HEAP32[(0 + 1104 | 0) >> 2] = $21 + $20 | 0;
     label$93 : {
      if ($48) {
       break label$93
      }
      $33 = $5 & 7 | 0;
      $35 = 0;
      label$94 : {
       if ($18 >>> 0 < 7 >>> 0) {
        break label$94
       }
       $34 = $21 + 16 | 0;
       $35 = 0;
       label$95 : while (1) {
        i64toi32_i32$1 = $34;
        i64toi32_i32$0 = 6;
        HEAP32[$34 >> 2] = 6;
        HEAP32[($34 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = $34 + 8 | 0;
        i64toi32_i32$0 = 6;
        HEAP32[i64toi32_i32$1 >> 2] = 6;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = $34 + -8 | 0;
        i64toi32_i32$0 = 6;
        HEAP32[i64toi32_i32$1 >> 2] = 6;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = $34 + -16 | 0;
        i64toi32_i32$0 = 6;
        HEAP32[i64toi32_i32$1 >> 2] = 6;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        $34 = $34 + 32 | 0;
        $35 = $35 + 8 | 0;
        if (($16 | 0) != ($35 | 0)) {
         continue label$95
        }
        break label$95;
       };
      }
      if (!$33) {
       break label$93
      }
      $34 = $21 + ($35 << 2 | 0) | 0;
      $35 = $17;
      label$96 : while (1) {
       HEAP32[$34 >> 2] = 6;
       $34 = $34 + 4 | 0;
       $35 = $35 + -1 | 0;
       if ($35) {
        continue label$96
       }
       break label$96;
      };
     }
     label$97 : {
      if ($42 & 255 | 0) {
       break label$97
      }
      label$98 : {
       if (($4 | 0) < (1 | 0)) {
        break label$98
       }
       label$99 : {
        label$100 : {
         if ($12) {
          break label$100
         }
         $35 = 0;
         break label$99;
        }
        $36 = $4 & 1 | 0;
        $34 = $47 + 7 | 0;
        $35 = 0;
        label$101 : while (1) {
         $33 = $34 + $9 | 0;
         HEAP8[($33 + 1 | 0) >> 0] = 2;
         HEAP8[($34 + -5 | 0) >> 0] = 2;
         HEAP8[($33 + 6 | 0) >> 0] = 2;
         HEAP8[$34 >> 0] = 2;
         $34 = $34 + 10 | 0;
         $35 = $35 + 2 | 0;
         if (($11 | 0) != ($35 | 0)) {
          continue label$101
         }
         break label$101;
        };
        if (!$36) {
         break label$98
        }
       }
       HEAP8[((Math_imul($35, 5) + $47 | 0) + 2 | 0) >> 0] = 2;
       HEAP8[((Math_imul($35 + $19 | 0, 5) + $47 | 0) + 8 | 0) >> 0] = 2;
      }
      if (($3 | 0) < (1 | 0)) {
       break label$97
      }
      label$102 : {
       label$103 : {
        if ($8) {
         break label$103
        }
        $35 = 0;
        break label$102;
       }
       $36 = $3 & 1 | 0;
       $35 = 0;
       $34 = $47;
       label$104 : while (1) {
        HEAP8[($34 + 4 | 0) >> 0] = 2;
        $33 = $34 + $7 | 0;
        HEAP8[($33 + 4 | 0) >> 0] = 2;
        HEAP8[($33 + -4 | 0) >> 0] = 2;
        HEAP8[($34 + $15 | 0) >> 0] = 2;
        $34 = $34 + $14 | 0;
        $35 = $35 + 2 | 0;
        if (($10 | 0) != ($35 | 0)) {
         continue label$104
        }
        break label$104;
       };
       if (!$36) {
        break label$97
       }
      }
      $34 = Math_imul($35, $4);
      HEAP8[((Math_imul($34, 5) + $47 | 0) + 4 | 0) >> 0] = 2;
      HEAP8[((Math_imul($34 + $4 | 0, 5) + $47 | 0) + -4 | 0) >> 0] = 2;
     }
     $43 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     $34 = $43 + 20 | 0;
     HEAP32[$43 >> 2] = $34;
     $33 = $34 + $5 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $33;
     label$105 : {
      if (!$5) {
       break label$105
      }
      label$106 : {
       label$107 : {
        if ($5 & 7 | 0) {
         break label$107
        }
        $35 = $5;
        break label$106;
       }
       $33 = $17;
       $35 = $5;
       label$108 : while (1) {
        HEAP8[$34 >> 0] = 0;
        $34 = $34 + 1 | 0;
        $35 = $35 + -1 | 0;
        $33 = $33 + -1 | 0;
        if ($33) {
         continue label$108
        }
        break label$108;
       };
      }
      label$109 : {
       if ($18 >>> 0 < 7 >>> 0) {
        break label$109
       }
       label$110 : while (1) {
        i64toi32_i32$1 = $34;
        i64toi32_i32$0 = 0;
        $95 = 0;
        HEAP8[$34 >> 0] = $95;
        HEAP8[($34 + 1 | 0) >> 0] = $95 >>> 8 | 0;
        HEAP8[($34 + 2 | 0) >> 0] = $95 >>> 16 | 0;
        HEAP8[($34 + 3 | 0) >> 0] = $95 >>> 24 | 0;
        HEAP8[($34 + 4 | 0) >> 0] = i64toi32_i32$0;
        HEAP8[($34 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
        HEAP8[($34 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
        HEAP8[($34 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
        $34 = $34 + 8 | 0;
        $35 = $35 + -8 | 0;
        if ($35) {
         continue label$110
        }
        break label$110;
       };
      }
      $33 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     }
     HEAP32[($43 + 8 | 0) >> 2] = $23;
     HEAP32[($43 + 4 | 0) >> 2] = $33;
     i64toi32_i32$1 = $43;
     i64toi32_i32$0 = 0;
     HEAP32[($43 + 12 | 0) >> 2] = 0;
     HEAP32[($43 + 16 | 0) >> 2] = i64toi32_i32$0;
     $35 = 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $33 + $24 | 0;
     $50 = 1;
     $51 = $45 + 1 | 0;
     $33 = 0;
     label$111 : while (1) {
      $34 = $35;
      label$112 : {
       label$113 : {
        label$114 : {
         label$115 : {
          label$116 : {
           if (($33 | 0) == ($34 | 0)) {
            break label$116
           }
           $34 = $33 + 1 | 0;
           HEAP32[($43 + 12 | 0) >> 2] = $34;
           $52 = HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($33 << 2 | 0) | 0) >> 2] | 0;
           $34 = ($34 | 0) == (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0) ? 0 : $34;
           HEAP32[($43 + 12 | 0) >> 2] = $34;
           HEAP8[($52 + (HEAP32[$43 >> 2] | 0) | 0) >> 0] = 0;
           if (($52 | 0) != (-1 | 0)) {
            break label$115
           }
          }
          if (!($50 & 1 | 0)) {
           break label$114
          }
          label$117 : {
           if ($48) {
            break label$117
           }
           $37 = HEAP32[$43 >> 2] | 0;
           $34 = 0;
           label$118 : while (1) {
            label$119 : {
             $33 = $37 + $34 | 0;
             if (HEAPU8[$33 >> 0] | 0) {
              break label$119
             }
             $36 = $35 + 1 | 0;
             HEAP32[($43 + 16 | 0) >> 2] = $36;
             HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($35 << 2 | 0) | 0) >> 2] = $34;
             HEAP8[$33 >> 0] = 1;
             $35 = $36;
             if (($35 | 0) != (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
              break label$119
             }
             $35 = 0;
             HEAP32[($43 + 16 | 0) >> 2] = 0;
            }
            $34 = $34 + 1 | 0;
            if (($5 | 0) != ($34 | 0)) {
             continue label$118
            }
            break label$118;
           };
           $34 = HEAP32[($43 + 12 | 0) >> 2] | 0;
          }
          label$120 : {
           if (($34 | 0) != ($35 | 0)) {
            break label$120
           }
           $50 = 0;
           $52 = -1;
           break label$115;
          }
          $35 = $34 + 1 | 0;
          HEAP32[($43 + 12 | 0) >> 2] = $35;
          $50 = 0;
          $52 = HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($34 << 2 | 0) | 0) >> 2] | 0;
          HEAP32[($43 + 12 | 0) >> 2] = ($35 | 0) == (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0) ? 0 : $35;
          HEAP8[($52 + (HEAP32[$43 >> 2] | 0) | 0) >> 0] = 0;
         }
         $39 = ($52 | 0) / ($4 | 0) | 0;
         $42 = $52 - Math_imul($39, $4) | 0;
         $53 = $52;
         label$121 : {
          $54 = $52 << 2 | 0;
          $55 = $21 + $54 | 0;
          $37 = HEAP32[$55 >> 2] | 0;
          if ($37 & 2 | 0) {
           break label$121
          }
          $34 = 0;
          $35 = $37;
          label$122 : while (1) {
           $33 = $35;
           $34 = $34 ^ ($35 & 1 | 0) | 0;
           $36 = $35 & -4 | 0;
           $35 = HEAP32[($21 + $36 | 0) >> 2] | 0;
           if (!($35 & 2 | 0)) {
            continue label$122
           }
           break label$122;
          };
          $53 = $52;
          $38 = $33 >> 2 | 0;
          if (($38 | 0) == ($52 | 0)) {
           break label$121
          }
          $35 = $34 & 1 | 0;
          HEAP32[$55 >> 2] = $36 | $35 | 0;
          label$123 : {
           $34 = $37 >> 2 | 0;
           if (($34 | 0) == ($38 | 0)) {
            break label$123
           }
           label$124 : while (1) {
            $33 = $21 + ($34 << 2 | 0) | 0;
            $34 = HEAP32[$33 >> 2] | 0;
            $35 = ($37 & 1 | 0) ^ $35 | 0;
            HEAP32[$33 >> 2] = $35 | $36 | 0;
            $37 = $34;
            $34 = $34 >> 2 | 0;
            if (($34 | 0) != ($38 | 0)) {
             continue label$124
            }
            break label$124;
           };
          }
          $53 = $38;
         }
         $40 = 0;
         HEAP32[($1 + 64 | 0) >> 2] = 0;
         HEAP32[($1 + 80 | 0) >> 2] = 0;
         i64toi32_i32$1 = $1;
         i64toi32_i32$0 = 0;
         HEAP32[($1 + 52 | 0) >> 2] = 0;
         HEAP32[($1 + 56 | 0) >> 2] = i64toi32_i32$0;
         $56 = $39 + $3 | 0;
         $57 = $56 + 1 | 0;
         $58 = $42 + $4 | 0;
         $59 = $58 + -1 | 0;
         $60 = $56 + -1 | 0;
         $61 = $58 + 1 | 0;
         $62 = Math_imul($52, 5);
         $34 = $62 + 8 | 0;
         $63 = $47 + $34 | 0;
         $35 = $62 + 4 | 0;
         $64 = $47 + $35 | 0;
         $33 = $62 + 2 | 0;
         $65 = $47 + $33 | 0;
         $36 = $62 + 1 | 0;
         $66 = $47 + $36 | 0;
         $67 = $49 + ($34 << 2 | 0) | 0;
         $68 = $49 + ($35 << 2 | 0) | 0;
         $69 = $49 + ($33 << 2 | 0) | 0;
         $70 = $49 + ($36 << 2 | 0) | 0;
         $71 = 0;
         label$125 : {
          label$126 : while (1) {
           label$127 : {
            $36 = HEAPU8[($46 + ($40 + $54 | 0) | 0) >> 0] | 0;
            if (($36 | 0) != (255 | 0)) {
             break label$127
            }
            $34 = $40;
            break label$125;
           }
           HEAP32[$1 >> 2] = $53;
           $72 = 1;
           $35 = $36 & 1 | 0;
           $33 = !$35;
           $34 = HEAPU8[$66 >> 0] | 0;
           $42 = ($33 & ($34 | 0) == (1 | 0) | 0) ^ ($33 | ($34 | 0) != (2 | 0) | 0) | 0;
           label$128 : {
            label$129 : {
             label$130 : {
              if ($35) {
               break label$130
              }
              $37 = 0;
              $38 = 0;
              break label$129;
             }
             $73 = 0;
             $37 = 0;
             label$131 : {
              $38 = HEAP32[$70 >> 2] | 0;
              if (($38 | 0) <= ($45 | 0)) {
               break label$131
              }
              $37 = 1;
              HEAP32[($1 + 32 | 0) >> 2] = 1;
              $38 = 0;
             }
             $72 = 1;
             label$132 : {
              if (!$34) {
               break label$132
              }
              $74 = 1;
              break label$128;
             }
             label$133 : {
              $72 = Math_imul(($56 | 0) % ($3 | 0) | 0, $4) + (($61 | 0) % ($4 | 0) | 0) | 0;
              $73 = $21 + ($72 << 2 | 0) | 0;
              $41 = HEAP32[$73 >> 2] | 0;
              if ($41 & 2 | 0) {
               break label$133
              }
              $34 = 0;
              $35 = $41;
              label$134 : while (1) {
               $33 = $35;
               $34 = $34 ^ ($35 & 1 | 0) | 0;
               $39 = $35 & -4 | 0;
               $35 = HEAP32[($21 + $39 | 0) >> 2] | 0;
               if (!($35 & 2 | 0)) {
                continue label$134
               }
               break label$134;
              };
              $74 = $33 >> 2 | 0;
              if (($74 | 0) == ($72 | 0)) {
               break label$133
              }
              $35 = $34 & 1 | 0;
              HEAP32[$73 >> 2] = $39 | $35 | 0;
              label$135 : {
               $34 = $41 >> 2 | 0;
               if (($34 | 0) == ($74 | 0)) {
                break label$135
               }
               label$136 : while (1) {
                $33 = $21 + ($34 << 2 | 0) | 0;
                $34 = HEAP32[$33 >> 2] | 0;
                $35 = ($41 & 1 | 0) ^ $35 | 0;
                HEAP32[$33 >> 2] = $35 | $39 | 0;
                $41 = $34;
                $34 = $34 >> 2 | 0;
                if (($34 | 0) != ($74 | 0)) {
                 continue label$136
                }
                break label$136;
               };
              }
              $72 = $74;
             }
             label$137 : {
              if (($72 | 0) != ($53 | 0)) {
               break label$137
              }
              $72 = 1;
              $42 = 0;
              break label$129;
             }
             HEAP32[($1 + 4 | 0) >> 2] = $72;
             $74 = 2;
             $73 = 1;
             $72 = 0;
             break label$128;
            }
            $73 = 0;
            $74 = 1;
           }
           $35 = $36 & 2 | 0;
           $33 = !$35;
           $34 = HEAPU8[$65 >> 0] | 0;
           $42 = $42 & (($33 & ($34 | 0) == (1 | 0) | 0) ^ ($33 | ($34 | 0) != (2 | 0) | 0) | 0) | 0;
           label$138 : {
            if (!$35) {
             break label$138
            }
            label$139 : {
             label$140 : {
              $35 = HEAP32[$69 >> 2] | 0;
              if (($35 | 0) > ($45 | 0)) {
               break label$140
              }
              $38 = $35 + $38 | 0;
              break label$139;
             }
             HEAP32[($1 + 32 | 0 | ($37 << 2 | 0) | 0) >> 2] = 2;
             $37 = $37 + 1 | 0;
            }
            if ($34) {
             break label$138
            }
            label$141 : {
             $75 = Math_imul(($60 | 0) % ($3 | 0) | 0, $4) + (($58 | 0) % ($4 | 0) | 0) | 0;
             $76 = $21 + ($75 << 2 | 0) | 0;
             $41 = HEAP32[$76 >> 2] | 0;
             if ($41 & 2 | 0) {
              break label$141
             }
             $34 = 0;
             $35 = $41;
             label$142 : while (1) {
              $33 = $35;
              $34 = $34 ^ ($35 & 1 | 0) | 0;
              $39 = $35 & -4 | 0;
              $35 = HEAP32[($21 + $39 | 0) >> 2] | 0;
              if (!($35 & 2 | 0)) {
               continue label$142
              }
              break label$142;
             };
             $77 = $33 >> 2 | 0;
             if (($77 | 0) == ($75 | 0)) {
              break label$141
             }
             $35 = $34 & 1 | 0;
             HEAP32[$76 >> 2] = $39 | $35 | 0;
             label$143 : {
              $34 = $41 >> 2 | 0;
              if (($34 | 0) == ($77 | 0)) {
               break label$143
              }
              label$144 : while (1) {
               $33 = $21 + ($34 << 2 | 0) | 0;
               $34 = HEAP32[$33 >> 2] | 0;
               $35 = ($41 & 1 | 0) ^ $35 | 0;
               HEAP32[$33 >> 2] = $35 | $39 | 0;
               $41 = $34;
               $34 = $34 >> 2 | 0;
               if (($34 | 0) != ($77 | 0)) {
                continue label$144
               }
               break label$144;
              };
             }
             $75 = $77;
            }
            label$145 : {
             if (($75 | 0) != ($53 | 0)) {
              break label$145
             }
             $42 = 0;
             break label$138;
            }
            label$146 : {
             if ($72) {
              break label$146
             }
             label$147 : {
              if (($75 | 0) != (HEAP32[($1 + 4 | 0) >> 2] | 0 | 0)) {
               break label$147
              }
              $42 = 0;
              break label$138;
             }
             if ($73) {
              break label$146
             }
             $42 = 0;
             break label$138;
            }
            HEAP32[($1 | ($74 << 2 | 0) | 0) >> 2] = $75;
            $74 = $74 + 1 | 0;
           }
           $35 = $36 & 4 | 0;
           $33 = !$35;
           $34 = HEAPU8[$64 >> 0] | 0;
           $42 = $42 & (($33 & ($34 | 0) == (1 | 0) | 0) ^ ($33 | ($34 | 0) != (2 | 0) | 0) | 0) | 0;
           label$148 : {
            if (!$35) {
             break label$148
            }
            label$149 : {
             label$150 : {
              $35 = HEAP32[$68 >> 2] | 0;
              if (($35 | 0) > ($45 | 0)) {
               break label$150
              }
              $38 = $35 + $38 | 0;
              break label$149;
             }
             HEAP32[($1 + 32 | 0 | ($37 << 2 | 0) | 0) >> 2] = 4;
             $37 = $37 + 1 | 0;
            }
            if ($34) {
             break label$148
            }
            label$151 : {
             $73 = Math_imul(($56 | 0) % ($3 | 0) | 0, $4) + (($59 | 0) % ($4 | 0) | 0) | 0;
             $77 = $21 + ($73 << 2 | 0) | 0;
             $41 = HEAP32[$77 >> 2] | 0;
             if ($41 & 2 | 0) {
              break label$151
             }
             $34 = 0;
             $35 = $41;
             label$152 : while (1) {
              $33 = $35;
              $34 = $34 ^ ($35 & 1 | 0) | 0;
              $39 = $35 & -4 | 0;
              $35 = HEAP32[($21 + $39 | 0) >> 2] | 0;
              if (!($35 & 2 | 0)) {
               continue label$152
              }
              break label$152;
             };
             $72 = $33 >> 2 | 0;
             if (($72 | 0) == ($73 | 0)) {
              break label$151
             }
             $35 = $34 & 1 | 0;
             HEAP32[$77 >> 2] = $39 | $35 | 0;
             label$153 : {
              $34 = $41 >> 2 | 0;
              if (($34 | 0) == ($72 | 0)) {
               break label$153
              }
              label$154 : while (1) {
               $33 = $21 + ($34 << 2 | 0) | 0;
               $34 = HEAP32[$33 >> 2] | 0;
               $35 = ($41 & 1 | 0) ^ $35 | 0;
               HEAP32[$33 >> 2] = $35 | $39 | 0;
               $41 = $34;
               $34 = $34 >> 2 | 0;
               if (($34 | 0) != ($72 | 0)) {
                continue label$154
               }
               break label$154;
              };
             }
             $73 = $72;
            }
            label$155 : {
             if (($73 | 0) != (HEAP32[$1 >> 2] | 0 | 0)) {
              break label$155
             }
             $42 = 0;
             break label$148;
            }
            label$156 : {
             if (($74 | 0) == (1 | 0)) {
              break label$156
             }
             $34 = 1;
             label$157 : {
              if (($73 | 0) == (HEAP32[($1 + 4 | 0) >> 2] | 0 | 0)) {
               break label$157
              }
              $34 = 2;
              if (($74 | 0) == (2 | 0)) {
               break label$156
              }
              if (($73 | 0) != (HEAP32[($1 + 8 | 0) >> 2] | 0 | 0)) {
               break label$156
              }
             }
             if (($34 | 0) == ($74 | 0)) {
              break label$156
             }
             $42 = 0;
             break label$148;
            }
            HEAP32[($1 + ($74 << 2 | 0) | 0) >> 2] = $73;
            $74 = $74 + 1 | 0;
           }
           $35 = $36 & 8 | 0;
           $33 = !$35;
           $34 = HEAPU8[$63 >> 0] | 0;
           $42 = $42 & (($33 & ($34 | 0) == (1 | 0) | 0) ^ ($33 | ($34 | 0) != (2 | 0) | 0) | 0) | 0;
           label$158 : {
            if (!$35) {
             break label$158
            }
            label$159 : {
             label$160 : {
              $35 = HEAP32[$67 >> 2] | 0;
              if (($35 | 0) > ($45 | 0)) {
               break label$160
              }
              $38 = $35 + $38 | 0;
              break label$159;
             }
             HEAP32[(($1 + 32 | 0) + ($37 << 2 | 0) | 0) >> 2] = 8;
             $37 = $37 + 1 | 0;
            }
            if ($34) {
             break label$158
            }
            label$161 : {
             $73 = Math_imul(($57 | 0) % ($3 | 0) | 0, $4) + (($58 | 0) % ($4 | 0) | 0) | 0;
             $77 = $21 + ($73 << 2 | 0) | 0;
             $41 = HEAP32[$77 >> 2] | 0;
             if ($41 & 2 | 0) {
              break label$161
             }
             $34 = 0;
             $35 = $41;
             label$162 : while (1) {
              $33 = $35;
              $34 = $34 ^ ($35 & 1 | 0) | 0;
              $39 = $35 & -4 | 0;
              $35 = HEAP32[($21 + $39 | 0) >> 2] | 0;
              if (!($35 & 2 | 0)) {
               continue label$162
              }
              break label$162;
             };
             $72 = $33 >> 2 | 0;
             if (($72 | 0) == ($73 | 0)) {
              break label$161
             }
             $35 = $34 & 1 | 0;
             HEAP32[$77 >> 2] = $39 | $35 | 0;
             label$163 : {
              $34 = $41 >> 2 | 0;
              if (($34 | 0) == ($72 | 0)) {
               break label$163
              }
              label$164 : while (1) {
               $33 = $21 + ($34 << 2 | 0) | 0;
               $34 = HEAP32[$33 >> 2] | 0;
               $35 = ($41 & 1 | 0) ^ $35 | 0;
               HEAP32[$33 >> 2] = $35 | $39 | 0;
               $41 = $34;
               $34 = $34 >> 2 | 0;
               if (($34 | 0) != ($72 | 0)) {
                continue label$164
               }
               break label$164;
              };
             }
             $73 = $72;
            }
            $34 = 0;
            label$165 : {
             if (($73 | 0) == (HEAP32[$1 >> 2] | 0 | 0)) {
              break label$165
             }
             if (($74 | 0) == (1 | 0)) {
              break label$158
             }
             $34 = 1;
             if (($73 | 0) == (HEAP32[($1 + 4 | 0) >> 2] | 0 | 0)) {
              break label$165
             }
             if (($74 | 0) == (2 | 0)) {
              break label$158
             }
             $34 = 2;
             if (($73 | 0) == (HEAP32[($1 + 8 | 0) >> 2] | 0 | 0)) {
              break label$165
             }
             $34 = 3;
             if (($74 | 0) == (3 | 0)) {
              break label$158
             }
             if (($73 | 0) != (HEAP32[($1 + 12 | 0) >> 2] | 0 | 0)) {
              break label$158
             }
            }
            if (($34 | 0) == ($74 | 0)) {
             break label$158
            }
            $42 = 0;
           }
           label$166 : {
            label$167 : {
             label$168 : {
              label$169 : {
               label$170 : {
                switch ($37 | 0) {
                default:
                 if (($37 | 0) <= (0 | 0)) {
                  break label$169
                 }
                 HEAP32[(($1 + 48 | 0) + ((HEAP32[($1 + 32 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = $51;
                 HEAP32[(($1 + 48 | 0) + ((HEAP32[($1 + 36 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = $51;
                 if (($37 | 0) == (2 | 0)) {
                  break label$169
                 }
                 HEAP32[(($1 + 48 | 0) + ((HEAP32[($1 + 40 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = $51;
                 if (($37 | 0) == (3 | 0)) {
                  break label$169
                 }
                 HEAP32[(($1 + 48 | 0) + ((HEAP32[($1 + 44 | 0) >> 2] | 0) << 2 | 0) | 0) >> 2] = $51;
                 break label$169;
                case 0:
                 break label$168;
                case 1:
                 break label$170;
                };
               }
               $34 = ($1 + 48 | 0) + ((HEAP32[($1 + 32 | 0) >> 2] | 0) << 2 | 0) | 0;
               if ((HEAP32[$34 >> 2] | 0 | 0) > ($38 | 0)) {
                break label$169
               }
               HEAP32[$34 >> 2] = $38 + 1 | 0;
              }
              if (!$42) {
               break label$166
              }
              break label$167;
             }
             if (($38 | 0) > (0 | 0) & ($38 + 1 | 0 | 0) < ($45 | 0) | 0) {
              break label$166
             }
             if ($42 ^ 1 | 0) {
              break label$166
             }
            }
            HEAP8[($46 + ($71 + $54 | 0) | 0) >> 0] = $36;
            $71 = $71 + 1 | 0;
           }
           $34 = 4;
           $40 = $40 + 1 | 0;
           if (($40 | 0) != (4 | 0)) {
            continue label$126
           }
           break label$126;
          };
         }
         if (!$71) {
          break label$113
         }
         label$172 : {
          if (($71 | 0) >= ($34 | 0)) {
           break label$172
          }
          $50 = 1;
          if (($71 | 0) > (3 | 0)) {
           break label$172
          }
          wasm2js_memory_fill($46 + ($71 + $54 | 0) | 0, 255, 4 - $71 | 0);
         }
         label$173 : {
          $71 = HEAPU8[($46 + $54 | 0) >> 0] | 0;
          if (($71 | 0) != (255 | 0)) {
           break label$173
          }
          $71 = 0;
          $72 = 15;
          break label$112;
         }
         $72 = $71 & 15 | 0;
         $34 = HEAPU8[($46 + ($54 | 1 | 0) | 0) >> 0] | 0;
         if (($34 | 0) == (255 | 0)) {
          break label$112
         }
         $71 = $34 | $71 | 0;
         $72 = $72 & $34 | 0;
         $34 = HEAPU8[($46 + ($54 | 2 | 0) | 0) >> 0] | 0;
         if (($34 | 0) == (255 | 0)) {
          break label$112
         }
         $71 = $34 | $71 | 0;
         $72 = $72 & $34 | 0;
         $34 = HEAPU8[($46 + ($54 | 3 | 0) | 0) >> 0] | 0;
         if (($34 | 0) == (255 | 0)) {
          break label$112
         }
         $71 = $34 | $71 | 0;
         $72 = $72 & $34 | 0;
         break label$112;
        }
        if ($48) {
         break label$76
        }
        $35 = 1;
        $21 = 0;
        label$174 : while (1) {
         $34 = $21 + 1 | 0;
         $21 = $46 + ($21 << 2 | 0) | 0;
         label$175 : {
          label$176 : while (1) {
           if ((HEAPU8[($21 + 1 | 0) >> 0] | 0 | 0) != (255 | 0)) {
            break label$175
           }
           HEAP8[(($2 + $34 | 0) + -1 | 0) >> 0] = HEAPU8[$21 >> 0] | 0 | 16 | 0;
           $21 = $21 + 4 | 0;
           $34 = $34 + 1 | 0;
           if (($13 + $34 | 0 | 0) != (1 | 0)) {
            continue label$176
           }
           break label$176;
          };
          if (($35 | 0) != (1 | 0)) {
           break label$113
          }
          $35 = $5 & 3 | 0;
          $34 = 0;
          label$177 : {
           if ($18 >>> 0 < 3 >>> 0) {
            break label$177
           }
           $36 = $5 & -4 | 0;
           $34 = 0;
           label$178 : while (1) {
            $21 = $2 + $34 | 0;
            HEAP8[$21 >> 0] = (HEAPU8[$21 >> 0] | 0) & 239 | 0;
            $33 = $21 + 1 | 0;
            HEAP8[$33 >> 0] = (HEAPU8[$33 >> 0] | 0) & 239 | 0;
            $33 = $21 + 2 | 0;
            HEAP8[$33 >> 0] = (HEAPU8[$33 >> 0] | 0) & 239 | 0;
            $21 = $21 + 3 | 0;
            HEAP8[$21 >> 0] = (HEAPU8[$21 >> 0] | 0) & 239 | 0;
            $34 = $34 + 4 | 0;
            if (($36 | 0) != ($34 | 0)) {
             continue label$178
            }
            break label$178;
           };
          }
          if (!$35) {
           break label$76
          }
          $21 = $2 + $34 | 0;
          label$179 : while (1) {
           HEAP8[$21 >> 0] = (HEAPU8[$21 >> 0] | 0) & 239 | 0;
           $21 = $21 + 1 | 0;
           $35 = $35 + -1 | 0;
           if ($35) {
            continue label$179
           }
           break label$76;
          };
         }
         $21 = ($2 + $34 | 0) + -1 | 0;
         HEAP8[$21 >> 0] = (HEAPU8[$21 >> 0] | 0) & 239 | 0;
         $35 = 0;
         $21 = $34;
         if ($13 + $21 | 0) {
          continue label$174
         }
         break label$174;
        };
       }
       label$180 : {
        label$181 : {
         if (($3 | 0) >= (1 | 0)) {
          break label$181
         }
         $35 = 0;
         break label$180;
        }
        $37 = 0;
        $35 = 0;
        label$182 : while (1) {
         label$183 : {
          label$184 : {
           if (($4 | 0) > (0 | 0)) {
            break label$184
           }
           $37 = $37 + 1 | 0;
           break label$183;
          }
          $21 = Math_imul($37, $4);
          label$185 : {
           label$186 : {
            $40 = $37 + 1 | 0;
            if (($40 | 0) < ($3 | 0)) {
             break label$186
            }
            $36 = $2 + $21 | 0;
            $21 = 0;
            label$187 : while (1) {
             label$188 : {
              $34 = $21;
              $21 = $21 + 1 | 0;
              if (($21 | 0) >= ($4 | 0)) {
               break label$188
              }
              $33 = $36 + $34 | 0;
              $2396 = HEAPU8[($33 + 1 | 0) >> 0] | 0;
              $33 = HEAPU8[$33 >> 0] | 0;
              if (!(($2396 ^ $33 | 0) & 16 | 0)) {
               break label$188
              }
              $35 = $35 + 1 | 0;
              $38 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
              label$189 : {
               if (!($33 & 16 | 0)) {
                break label$189
               }
               perturb($4 | 0, $3 | 0, $2 | 0, ($38 & 255 | 0 | 0) != (0 | 0) | 0, $21 | 0, $37 | 0, 4 | 0);
               break label$188;
              }
              perturb($4 | 0, $3 | 0, $2 | 0, ($38 & 255 | 0 | 0) != (0 | 0) | 0, $34 | 0, $37 | 0, 1 | 0);
             }
             if (($4 | 0) != ($21 | 0)) {
              continue label$187
             }
             break label$185;
            };
           }
           $33 = $2 + $21 | 0;
           $38 = $2 + Math_imul($40, $4) | 0;
           $34 = 0;
           label$190 : while (1) {
            label$191 : {
             $21 = $34;
             $34 = $21 + 1 | 0;
             if (($34 | 0) >= ($4 | 0)) {
              break label$191
             }
             $36 = $33 + $21 | 0;
             $2447 = HEAPU8[($36 + 1 | 0) >> 0] | 0;
             $36 = HEAPU8[$36 >> 0] | 0;
             if (!(($2447 ^ $36 | 0) & 16 | 0)) {
              break label$191
             }
             $35 = $35 + 1 | 0;
             $39 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
             label$192 : {
              if (!($36 & 16 | 0)) {
               break label$192
              }
              perturb($4 | 0, $3 | 0, $2 | 0, ($39 & 255 | 0 | 0) != (0 | 0) | 0, $34 | 0, $37 | 0, 4 | 0);
              break label$191;
             }
             perturb($4 | 0, $3 | 0, $2 | 0, ($39 & 255 | 0 | 0) != (0 | 0) | 0, $21 | 0, $37 | 0, 1 | 0);
            }
            label$193 : {
             $36 = HEAPU8[($33 + $21 | 0) >> 0] | 0;
             if (!(((HEAPU8[($38 + $21 | 0) >> 0] | 0) ^ $36 | 0) & 16 | 0)) {
              break label$193
             }
             $35 = $35 + 1 | 0;
             $39 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
             label$194 : {
              if (!($36 & 16 | 0)) {
               break label$194
              }
              perturb($4 | 0, $3 | 0, $2 | 0, ($39 & 255 | 0 | 0) != (0 | 0) | 0, $21 | 0, $40 | 0, 2 | 0);
              break label$193;
             }
             perturb($4 | 0, $3 | 0, $2 | 0, ($39 & 255 | 0 | 0) != (0 | 0) | 0, $21 | 0, $37 | 0, 8 | 0);
            }
            if (($4 | 0) != ($34 | 0)) {
             continue label$190
            }
            break label$190;
           };
          }
          $37 = $40;
         }
         if (($37 | 0) != ($3 | 0)) {
          continue label$182
         }
         break label$182;
        };
       }
       if (($44 | 0) == (-1 | 0)) {
        continue label$77
       }
       if (($44 | 0) <= ($35 | 0)) {
        continue label$1
       }
       continue label$77;
      }
      $34 = 1;
      label$195 : while (1) {
       label$196 : {
        $37 = $34;
        $34 = $47 + ($34 + $62 | 0) | 0;
        if (HEAPU8[$34 >> 0] | 0) {
         break label$196
        }
        $35 = ($37 >>> 2 | 0) & 3 | 0 | (($37 << 2 | 0) & 12 | 0) | 0;
        $33 = ((($37 | 0) == (8 | 0) ? 1 : ($37 | 0) == (2 | 0) ? -1 : 0) + $56 | 0 | 0) % ($3 | 0) | 0;
        $36 = ((($37 | 0) == (1 | 0) ? 1 : ($37 | 0) == (4 | 0) ? -1 : 0) + $58 | 0 | 0) % ($4 | 0) | 0;
        label$197 : {
         label$198 : {
          if (!($37 & $72 | 0)) {
           break label$198
          }
          HEAP8[$34 >> 0] = 1;
          $74 = Math_imul($33, $4) + $36 | 0;
          HEAP8[($47 + (Math_imul($74, 5) + $35 | 0) | 0) >> 0] = 1;
          $34 = 0;
          $35 = 0;
          $39 = $52;
          label$199 : {
           $40 = HEAP32[$55 >> 2] | 0;
           if ($40 & 2 | 0) {
            break label$199
           }
           $35 = 0;
           $33 = $40;
           label$200 : while (1) {
            $36 = $33;
            $35 = $35 ^ ($33 & 1 | 0) | 0;
            $38 = $33 & -4 | 0;
            $33 = HEAP32[($21 + $38 | 0) >> 2] | 0;
            if (!($33 & 2 | 0)) {
             continue label$200
            }
            break label$200;
           };
           label$201 : {
            $39 = $36 >> 2 | 0;
            if (($39 | 0) != ($52 | 0)) {
             break label$201
            }
            $39 = $52;
            break label$199;
           }
           $36 = $35 & 1 | 0;
           HEAP32[$55 >> 2] = $38 | $36 | 0;
           $33 = $40 >> 2 | 0;
           if (($33 | 0) == ($39 | 0)) {
            break label$199
           }
           label$202 : while (1) {
            $42 = $21 + ($33 << 2 | 0) | 0;
            $33 = HEAP32[$42 >> 2] | 0;
            $36 = ($40 & 1 | 0) ^ $36 | 0;
            HEAP32[$42 >> 2] = $36 | $38 | 0;
            $40 = $33;
            $33 = $33 >> 2 | 0;
            if (($33 | 0) != ($39 | 0)) {
             continue label$202
            }
            break label$202;
           };
          }
          $36 = $74;
          label$203 : {
           $41 = $21 + ($36 << 2 | 0) | 0;
           $40 = HEAP32[$41 >> 2] | 0;
           if ($40 & 2 | 0) {
            break label$203
           }
           $34 = 0;
           $33 = $40;
           label$204 : while (1) {
            $36 = $33;
            $34 = $34 ^ ($33 & 1 | 0) | 0;
            $38 = $33 & -4 | 0;
            $33 = HEAP32[($21 + $38 | 0) >> 2] | 0;
            if (!($33 & 2 | 0)) {
             continue label$204
            }
            break label$204;
           };
           label$205 : {
            $36 = $36 >> 2 | 0;
            if (($36 | 0) != ($74 | 0)) {
             break label$205
            }
            $36 = $74;
            break label$203;
           }
           $42 = $34 & 1 | 0;
           HEAP32[$41 >> 2] = $38 | $42 | 0;
           $33 = $40 >> 2 | 0;
           if (($33 | 0) == ($36 | 0)) {
            break label$203
           }
           label$206 : while (1) {
            $41 = $21 + ($33 << 2 | 0) | 0;
            $33 = HEAP32[$41 >> 2] | 0;
            $42 = ($40 & 1 | 0) ^ $42 | 0;
            HEAP32[$41 >> 2] = $42 | $38 | 0;
            $40 = $33;
            $33 = $33 >> 2 | 0;
            if (($33 | 0) != ($36 | 0)) {
             continue label$206
            }
            break label$206;
           };
          }
          label$207 : {
           label$208 : {
            if (($39 | 0) != ($36 | 0)) {
             break label$208
            }
            $38 = HEAP32[($21 + ($39 << 2 | 0) | 0) >> 2] | 0;
            break label$207;
           }
           $33 = (($39 | 0) < ($36 | 0) ? $39 : $36) << 2 | 0;
           $38 = $21 + $33 | 0;
           $36 = ($39 | 0) > ($36 | 0) ? $39 : $36;
           $39 = $21 + ($36 << 2 | 0) | 0;
           HEAP32[$38 >> 2] = (HEAP32[$38 >> 2] | 0) + ((HEAP32[$39 >> 2] | 0) & -4 | 0) | 0;
           $38 = $33 | (($35 ^ $34 | 0) & 1 | 0) | 0;
           HEAP32[$39 >> 2] = $38;
           $39 = $36;
          }
          label$209 : {
           if ($38 & 2 | 0) {
            break label$209
           }
           $42 = $21 + ($39 << 2 | 0) | 0;
           $34 = 0;
           $35 = $38;
           label$210 : while (1) {
            $33 = $35;
            $34 = $34 ^ ($35 & 1 | 0) | 0;
            $36 = $35 & -4 | 0;
            $35 = HEAP32[($21 + $36 | 0) >> 2] | 0;
            if (!($35 & 2 | 0)) {
             continue label$210
            }
            break label$210;
           };
           $40 = $33 >> 2 | 0;
           if (($40 | 0) == ($39 | 0)) {
            break label$209
           }
           $35 = $34 & 1 | 0;
           HEAP32[$42 >> 2] = $36 | $35 | 0;
           $34 = $38 >> 2 | 0;
           if (($34 | 0) == ($40 | 0)) {
            break label$209
           }
           label$211 : while (1) {
            $33 = $21 + ($34 << 2 | 0) | 0;
            $34 = HEAP32[$33 >> 2] | 0;
            $35 = ($38 & 1 | 0) ^ $35 | 0;
            HEAP32[$33 >> 2] = $35 | $36 | 0;
            $38 = $34;
            $34 = $34 >> 2 | 0;
            if (($34 | 0) != ($40 | 0)) {
             continue label$211
            }
            break label$211;
           };
          }
          $50 = 1;
          $34 = (HEAP32[$43 >> 2] | 0) + $74 | 0;
          if (HEAPU8[$34 >> 0] | 0) {
           break label$196
          }
          $50 = 1;
          $35 = HEAP32[($43 + 16 | 0) >> 2] | 0;
          $33 = $35 + 1 | 0;
          HEAP32[($43 + 16 | 0) >> 2] = $33;
          HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($35 << 2 | 0) | 0) >> 2] = $74;
          HEAP8[$34 >> 0] = 1;
          if (($33 | 0) == (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
           break label$197
          }
          break label$196;
         }
         if ($37 & $71 | 0) {
          break label$196
         }
         HEAP8[$34 >> 0] = 2;
         $34 = Math_imul($33, $4) + $36 | 0;
         HEAP8[($47 + (Math_imul($34, 5) + $35 | 0) | 0) >> 0] = 2;
         $50 = 1;
         $35 = (HEAP32[$43 >> 2] | 0) + $34 | 0;
         if (HEAPU8[$35 >> 0] | 0) {
          break label$196
         }
         $50 = 1;
         $33 = HEAP32[($43 + 16 | 0) >> 2] | 0;
         $36 = $33 + 1 | 0;
         HEAP32[($43 + 16 | 0) >> 2] = $36;
         HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($33 << 2 | 0) | 0) >> 2] = $34;
         HEAP8[$35 >> 0] = 1;
         if (($36 | 0) != (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
          break label$196
         }
        }
        HEAP32[($43 + 16 | 0) >> 2] = 0;
        $50 = 1;
       }
       $34 = $37 << 1 | 0;
       if ($37 >>> 0 < 5 >>> 0) {
        continue label$195
       }
       break label$195;
      };
      label$212 : {
       $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
       if (($34 | 0) <= (0 | 0)) {
        break label$212
       }
       $35 = Math_imul(($56 | 0) % ($3 | 0) | 0, $4) + (($61 | 0) % ($4 | 0) | 0) | 0;
       $33 = (Math_imul($35, 20) + $49 | 0) + 16 | 0;
       if ((HEAP32[$33 >> 2] | 0 | 0) <= ($34 | 0)) {
        break label$212
       }
       HEAP32[$33 >> 2] = $34;
       $50 = 1;
       $34 = (HEAP32[$43 >> 2] | 0) + $35 | 0;
       if (HEAPU8[$34 >> 0] | 0) {
        break label$212
       }
       $50 = 1;
       $33 = HEAP32[($43 + 16 | 0) >> 2] | 0;
       $36 = $33 + 1 | 0;
       HEAP32[($43 + 16 | 0) >> 2] = $36;
       HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($33 << 2 | 0) | 0) >> 2] = $35;
       HEAP8[$34 >> 0] = 1;
       if (($36 | 0) != (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
        break label$212
       }
       HEAP32[($43 + 16 | 0) >> 2] = 0;
      }
      label$213 : {
       $34 = HEAP32[($1 + 56 | 0) >> 2] | 0;
       if (($34 | 0) <= (0 | 0)) {
        break label$213
       }
       $35 = Math_imul(($60 | 0) % ($3 | 0) | 0, $4) + (($58 | 0) % ($4 | 0) | 0) | 0;
       $33 = (Math_imul($35, 20) + $49 | 0) + 32 | 0;
       if ((HEAP32[$33 >> 2] | 0 | 0) <= ($34 | 0)) {
        break label$213
       }
       HEAP32[$33 >> 2] = $34;
       $50 = 1;
       $34 = (HEAP32[$43 >> 2] | 0) + $35 | 0;
       if (HEAPU8[$34 >> 0] | 0) {
        break label$213
       }
       $50 = 1;
       $33 = HEAP32[($43 + 16 | 0) >> 2] | 0;
       $36 = $33 + 1 | 0;
       HEAP32[($43 + 16 | 0) >> 2] = $36;
       HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($33 << 2 | 0) | 0) >> 2] = $35;
       HEAP8[$34 >> 0] = 1;
       if (($36 | 0) != (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
        break label$213
       }
       HEAP32[($43 + 16 | 0) >> 2] = 0;
      }
      label$214 : {
       $34 = HEAP32[($1 + 64 | 0) >> 2] | 0;
       if (($34 | 0) < (1 | 0)) {
        break label$214
       }
       $35 = Math_imul(($56 | 0) % ($3 | 0) | 0, $4) + (($59 | 0) % ($4 | 0) | 0) | 0;
       $33 = (Math_imul($35, 20) + $49 | 0) + 4 | 0;
       if ((HEAP32[$33 >> 2] | 0 | 0) <= ($34 | 0)) {
        break label$214
       }
       HEAP32[$33 >> 2] = $34;
       $50 = 1;
       $34 = (HEAP32[$43 >> 2] | 0) + $35 | 0;
       if (HEAPU8[$34 >> 0] | 0) {
        break label$214
       }
       $50 = 1;
       $33 = HEAP32[($43 + 16 | 0) >> 2] | 0;
       $36 = $33 + 1 | 0;
       HEAP32[($43 + 16 | 0) >> 2] = $36;
       HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($33 << 2 | 0) | 0) >> 2] = $35;
       HEAP8[$34 >> 0] = 1;
       if (($36 | 0) != (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
        break label$214
       }
       HEAP32[($43 + 16 | 0) >> 2] = 0;
      }
      label$215 : {
       $34 = HEAP32[($1 + 80 | 0) >> 2] | 0;
       if (($34 | 0) < (1 | 0)) {
        break label$215
       }
       $35 = Math_imul(($57 | 0) % ($3 | 0) | 0, $4) + (($58 | 0) % ($4 | 0) | 0) | 0;
       $33 = (Math_imul($35, 20) + $49 | 0) + 8 | 0;
       if ((HEAP32[$33 >> 2] | 0 | 0) <= ($34 | 0)) {
        break label$215
       }
       HEAP32[$33 >> 2] = $34;
       $50 = 1;
       $34 = (HEAP32[$43 >> 2] | 0) + $35 | 0;
       if (HEAPU8[$34 >> 0] | 0) {
        break label$215
       }
       $50 = 1;
       $33 = HEAP32[($43 + 16 | 0) >> 2] | 0;
       $36 = $33 + 1 | 0;
       HEAP32[($43 + 16 | 0) >> 2] = $36;
       HEAP32[((HEAP32[($43 + 4 | 0) >> 2] | 0) + ($33 << 2 | 0) | 0) >> 2] = $35;
       HEAP8[$34 >> 0] = 1;
       if (($36 | 0) != (HEAP32[($43 + 8 | 0) >> 2] | 0 | 0)) {
        break label$215
       }
       HEAP32[($43 + 16 | 0) >> 2] = 0;
      }
      $35 = HEAP32[($43 + 16 | 0) >> 2] | 0;
      $33 = HEAP32[($43 + 12 | 0) >> 2] | 0;
      continue label$111;
     };
    };
   }
   break label$1;
  };
  $58 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[($58 + 4 | 0) >> 2] = 1;
  HEAP32[$58 >> 2] = 0;
  $33 = $58 + 8 | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $33;
  label$216 : {
   $63 = ($3 | 0) > (0 | 0) & ($4 | 0) > (0 | 0) | 0;
   if (($63 | 0) != (1 | 0)) {
    break label$216
   }
   $37 = 0;
   label$217 : while (1) {
    label$218 : {
     label$219 : {
      if (($37 | 0) < ($8 | 0)) {
       break label$219
      }
      $36 = 0;
      label$220 : while (1) {
       label$221 : {
        $34 = Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, $37) + $36 | 0;
        $21 = HEAPU8[($2 + $34 | 0) >> 0] | 0;
        if ($21 & 1 | 0) {
         break label$221
        }
        label$222 : {
         if (($36 | 0) < ($12 | 0)) {
          break label$222
         }
         if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
          break label$221
         }
        }
        $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
        HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
        HEAP32[($21 + 8 | 0) >> 2] = 1;
        HEAP32[($21 + 4 | 0) >> 2] = $37;
        HEAP32[$21 >> 2] = $36;
        label$223 : {
         if (!(HEAP32[($58 + 4 | 0) >> 2] | 0)) {
          break label$223
         }
         add234_internal($58 | 0, $21 | 0, -1 | 0) | 0;
         $34 = Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, $37) + $36 | 0;
        }
        $21 = HEAPU8[($2 + $34 | 0) >> 0] | 0;
       }
       label$224 : {
        if ($21 & 8 | 0) {
         break label$224
        }
        if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
         break label$224
        }
        $35 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
        HEAP32[(0 + 1104 | 0) >> 2] = $35 + 12 | 0;
        HEAP32[($35 + 8 | 0) >> 2] = 8;
        HEAP32[($35 + 4 | 0) >> 2] = $37;
        HEAP32[$35 >> 2] = $36;
        if (!(HEAP32[($58 + 4 | 0) >> 2] | 0)) {
         break label$224
        }
        label$225 : {
         $33 = HEAP32[$58 >> 2] | 0;
         if ($33) {
          break label$225
         }
         $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
         HEAP32[$58 >> 2] = $21;
         HEAP32[($21 + 8 | 0) >> 2] = 0;
         i64toi32_i32$1 = $21 + 40 | 0;
         i64toi32_i32$0 = 0;
         HEAP32[i64toi32_i32$1 >> 2] = 0;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
         HEAP32[((HEAP32[$58 >> 2] | 0) + 4 | 0) >> 2] = 0;
         HEAP32[((HEAP32[$58 >> 2] | 0) + 16 | 0) >> 2] = 0;
         HEAP32[((HEAP32[$58 >> 2] | 0) + 12 | 0) >> 2] = 0;
         HEAP32[(0 + 1104 | 0) >> 2] = $21 + 48 | 0;
         $21 = HEAP32[$58 >> 2] | 0;
         HEAP32[$21 >> 2] = 0;
         HEAP32[($21 + 36 | 0) >> 2] = $35;
         i64toi32_i32$1 = $21;
         i64toi32_i32$0 = 0;
         HEAP32[($21 + 20 | 0) >> 2] = 0;
         HEAP32[($21 + 24 | 0) >> 2] = i64toi32_i32$0;
         i64toi32_i32$1 = $21 + 28 | 0;
         i64toi32_i32$0 = 0;
         HEAP32[i64toi32_i32$1 >> 2] = 0;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
         break label$224;
        }
        label$226 : while (1) {
         $21 = 0;
         label$227 : {
          $34 = $33;
          $33 = FUNCTION_TABLE[HEAP32[($58 + 4 | 0) >> 2] | 0 | 0]($35, HEAP32[($34 + 36 | 0) >> 2] | 0) | 0;
          if (($33 | 0) < (0 | 0)) {
           break label$227
          }
          if (!$33) {
           break label$224
          }
          $21 = 1;
          $33 = HEAP32[($34 + 40 | 0) >> 2] | 0;
          if (!$33) {
           break label$227
          }
          $33 = FUNCTION_TABLE[HEAP32[($58 + 4 | 0) >> 2] | 0 | 0]($35, $33) | 0;
          if (($33 | 0) < (0 | 0)) {
           break label$227
          }
          if (!$33) {
           break label$224
          }
          $21 = 2;
          $33 = HEAP32[($34 + 44 | 0) >> 2] | 0;
          if (!$33) {
           break label$227
          }
          $33 = FUNCTION_TABLE[HEAP32[($58 + 4 | 0) >> 2] | 0 | 0]($35, $33) | 0;
          if (($33 | 0) < (0 | 0)) {
           break label$227
          }
          $21 = 3;
          if (!$33) {
           break label$224
          }
         }
         $33 = HEAP32[(($34 + ($21 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
         if ($33) {
          continue label$226
         }
         break label$226;
        };
        add234_insert(0 | 0, $35 | 0, 0 | 0, $58 | 0, $34 | 0, $21 | 0) | 0;
       }
       $36 = $36 + 1 | 0;
       if (($36 | 0) != ($4 | 0)) {
        continue label$220
       }
       break label$218;
      };
     }
     $36 = 0;
     label$228 : while (1) {
      label$229 : {
       $34 = Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, $37) + $36 | 0;
       $21 = HEAPU8[($2 + $34 | 0) >> 0] | 0;
       if ($21 & 1 | 0) {
        break label$229
       }
       label$230 : {
        if (($36 | 0) < ($12 | 0)) {
         break label$230
        }
        if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
         break label$229
        }
       }
       $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $21 + 12 | 0;
       HEAP32[($21 + 8 | 0) >> 2] = 1;
       HEAP32[($21 + 4 | 0) >> 2] = $37;
       HEAP32[$21 >> 2] = $36;
       label$231 : {
        if (!(HEAP32[($58 + 4 | 0) >> 2] | 0)) {
         break label$231
        }
        add234_internal($58 | 0, $21 | 0, -1 | 0) | 0;
        $34 = Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, $37) + $36 | 0;
       }
       $21 = HEAPU8[($2 + $34 | 0) >> 0] | 0;
      }
      label$232 : {
       if ($21 & 8 | 0) {
        break label$232
       }
       $35 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $35 + 12 | 0;
       HEAP32[($35 + 8 | 0) >> 2] = 8;
       HEAP32[($35 + 4 | 0) >> 2] = $37;
       HEAP32[$35 >> 2] = $36;
       if (!(HEAP32[($58 + 4 | 0) >> 2] | 0)) {
        break label$232
       }
       label$233 : {
        $33 = HEAP32[$58 >> 2] | 0;
        if ($33) {
         break label$233
        }
        $21 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
        HEAP32[$58 >> 2] = $21;
        HEAP32[($21 + 8 | 0) >> 2] = 0;
        i64toi32_i32$1 = $21 + 40 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[((HEAP32[$58 >> 2] | 0) + 4 | 0) >> 2] = 0;
        HEAP32[((HEAP32[$58 >> 2] | 0) + 16 | 0) >> 2] = 0;
        HEAP32[((HEAP32[$58 >> 2] | 0) + 12 | 0) >> 2] = 0;
        HEAP32[(0 + 1104 | 0) >> 2] = $21 + 48 | 0;
        $21 = HEAP32[$58 >> 2] | 0;
        HEAP32[$21 >> 2] = 0;
        HEAP32[($21 + 36 | 0) >> 2] = $35;
        i64toi32_i32$1 = $21;
        i64toi32_i32$0 = 0;
        HEAP32[($21 + 20 | 0) >> 2] = 0;
        HEAP32[($21 + 24 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$1 = $21 + 28 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        break label$232;
       }
       label$234 : while (1) {
        $21 = 0;
        label$235 : {
         $34 = $33;
         $33 = FUNCTION_TABLE[HEAP32[($58 + 4 | 0) >> 2] | 0 | 0]($35, HEAP32[($34 + 36 | 0) >> 2] | 0) | 0;
         if (($33 | 0) < (0 | 0)) {
          break label$235
         }
         if (!$33) {
          break label$232
         }
         $21 = 1;
         $33 = HEAP32[($34 + 40 | 0) >> 2] | 0;
         if (!$33) {
          break label$235
         }
         $33 = FUNCTION_TABLE[HEAP32[($58 + 4 | 0) >> 2] | 0 | 0]($35, $33) | 0;
         if (($33 | 0) < (0 | 0)) {
          break label$235
         }
         if (!$33) {
          break label$232
         }
         $21 = 2;
         $33 = HEAP32[($34 + 44 | 0) >> 2] | 0;
         if (!$33) {
          break label$235
         }
         $33 = FUNCTION_TABLE[HEAP32[($58 + 4 | 0) >> 2] | 0 | 0]($35, $33) | 0;
         if (($33 | 0) < (0 | 0)) {
          break label$235
         }
         $21 = 3;
         if (!$33) {
          break label$232
         }
        }
        $33 = HEAP32[(($34 + ($21 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
        if ($33) {
         continue label$234
        }
        break label$234;
       };
       add234_insert(0 | 0, $35 | 0, 0 | 0, $58 | 0, $34 | 0, $21 | 0) | 0;
      }
      $36 = $36 + 1 | 0;
      if (($36 | 0) != ($4 | 0)) {
       continue label$228
      }
      break label$228;
     };
    }
    $37 = $37 + 1 | 0;
    if (($37 | 0) != ($3 | 0)) {
     continue label$217
    }
    break label$217;
   };
   $33 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  }
  HEAP32[(0 + 1104 | 0) >> 2] = $33 + $23 | 0;
  label$236 : {
   if (($5 | 0) < (1 | 0)) {
    break label$236
   }
   label$237 : {
    label$238 : {
     if ($18) {
      break label$238
     }
     $21 = 0;
     break label$237;
    }
    $37 = $5 & 1 | 0;
    $36 = $5 & -2 | 0;
    $21 = 0;
    label$239 : while (1) {
     $34 = $33 + $21 | 0;
     $35 = $2 + $21 | 0;
     HEAP8[$34 >> 0] = HEAPU8[(((HEAPU8[$35 >> 0] | 0) & 15 | 0) + 1024 | 0) >> 0] | 0;
     HEAP8[($34 + 1 | 0) >> 0] = HEAPU8[(((HEAPU8[($35 + 1 | 0) >> 0] | 0) & 15 | 0) + 1024 | 0) >> 0] | 0;
     $21 = $21 + 2 | 0;
     if (($36 | 0) != ($21 | 0)) {
      continue label$239
     }
     break label$239;
    };
    if (!$37) {
     break label$236
    }
   }
   HEAP8[($33 + $21 | 0) >> 0] = HEAPU8[(((HEAPU8[($2 + $21 | 0) >> 0] | 0) & 15 | 0) + 1024 | 0) >> 0] | 0;
  }
  HEAP8[($33 + $5 | 0) >> 0] = 0;
  HEAP32[$0 >> 2] = $33;
  $53 = $4 << 2 | 0;
  $52 = Math_imul($4, 44);
  $46 = $5 & -8 | 0;
  $65 = $5 & 7 | 0;
  $66 = $5 + 1 | 0;
  $56 = $66 & -2 | 0;
  $73 = Math_imul($5, 44);
  $64 = $73 + 44 | 0;
  $62 = $1 + 76 | 0;
  $45 = $1 + 72 | 0;
  label$240 : while (1) {
   label$241 : {
    if (!$63) {
     break label$241
    }
    $35 = 0;
    label$242 : while (1) {
     $34 = $2;
     $33 = $4;
     label$243 : while (1) {
      $21 = HEAPU8[($34 + Math_imul($35, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) >> 0] | 0;
      label$244 : {
       label$245 : {
        switch ((undefined_weak_JS_random_upto(4 | 0) | 0) & 3 | 0 | 0) {
        case 2:
         $21 = ($21 >>> 2 | 0) & 3 | 0 | (($21 << 2 | 0) & 12 | 0) | 0;
         break label$244;
        case 1:
         $21 = ($21 << 1 | 0) & 14 | 0 | (($21 >>> 3 | 0) & 1 | 0) | 0;
         break label$244;
        case 0:
         break label$244;
        default:
         break label$245;
        };
       }
       $21 = ($21 >>> 1 | 0) & 7 | 0 | (($21 << 3 | 0) & 8 | 0) | 0;
      }
      HEAP8[($34 + Math_imul($35, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) >> 0] = $21;
      $34 = $34 + 1 | 0;
      $33 = $33 + -1 | 0;
      if ($33) {
       continue label$243
      }
      break label$243;
     };
     $35 = $35 + 1 | 0;
     if (($35 | 0) != ($3 | 0)) {
      continue label$242
     }
     break label$242;
    };
   }
   $50 = $23;
   label$248 : {
    label$249 : {
     label$250 : while (1) {
      $36 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
      HEAP32[(0 + 1104 | 0) >> 2] = $36 + $64 | 0;
      HEAP32[($1 + 60 | 0) >> 2] = 0;
      HEAP32[($1 + 56 | 0) >> 2] = $2;
      HEAP32[($1 + 52 | 0) >> 2] = $3;
      HEAP32[($1 + 48 | 0) >> 2] = $4;
      label$251 : {
       label$252 : {
        label$253 : {
         label$254 : {
          label$255 : {
           label$256 : {
            if (($5 | 0) < (0 | 0)) {
             break label$256
            }
            if ($5) {
             break label$255
            }
            $34 = 0;
            break label$254;
           }
           $21 = $36 + $73 | 0;
           HEAP32[($21 + 4 | 0) >> 2] = -1;
           $74 = $21 + 4 | 0;
           break label$252;
          }
          $35 = $66 & 1 | 0;
          $21 = $36 + 44 | 0;
          $34 = 0;
          label$257 : while (1) {
           HEAP32[$21 >> 2] = $5;
           HEAP8[($21 + 16 | 0) >> 0] = 0;
           i64toi32_i32$1 = $21 + 4 | 0;
           i64toi32_i32$0 = -1;
           HEAP32[i64toi32_i32$1 >> 2] = -2;
           HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
           HEAP8[($21 + -28 | 0) >> 0] = 0;
           i64toi32_i32$1 = $21 + -40 | 0;
           i64toi32_i32$0 = -1;
           HEAP32[i64toi32_i32$1 >> 2] = -2;
           HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
           HEAP32[($21 + -44 | 0) >> 2] = $5;
           $21 = $21 + 88 | 0;
           $34 = $34 + 2 | 0;
           if (($56 | 0) != ($34 | 0)) {
            continue label$257
           }
           break label$257;
          };
          if (!$35) {
           break label$253
          }
         }
         $21 = $36 + Math_imul($34, 44) | 0;
         HEAP8[($21 + 16 | 0) >> 0] = 0;
         i64toi32_i32$1 = $21;
         i64toi32_i32$0 = -1;
         HEAP32[($21 + 4 | 0) >> 2] = -2;
         HEAP32[($21 + 8 | 0) >> 2] = i64toi32_i32$0;
         HEAP32[$21 >> 2] = $5;
        }
        $21 = $36 + $73 | 0;
        HEAP32[($21 + 4 | 0) >> 2] = -1;
        $74 = $21 + 4 | 0;
        if (($5 | 0) < (1 | 0)) {
         break label$252
        }
        $41 = 0;
        label$258 : while (1) {
         label$259 : {
          $21 = $36 + Math_imul($41, 44) | 0;
          if ((HEAP32[$21 >> 2] | 0 | 0) != ($5 | 0)) {
           break label$259
          }
          $34 = HEAP32[$74 >> 2] | 0;
          HEAP32[$74 >> 2] = $41;
          HEAP32[($21 + 8 | 0) >> 2] = $34;
          HEAP32[($21 + 12 | 0) >> 2] = $41;
          $47 = HEAP32[($1 + 60 | 0) >> 2] | 0;
          $43 = HEAP32[($1 + 56 | 0) >> 2] | 0;
          $21 = $41;
          label$260 : while (1) {
           label$261 : {
            $37 = $21;
            $38 = $36 + Math_imul($21, 44) | 0;
            if (HEAPU8[($38 + 16 | 0) >> 0] | 0) {
             break label$261
            }
            HEAP8[($38 + 16 | 0) >> 0] = 1;
            label$262 : {
             if (($37 | 0) < (0 | 0)) {
              break label$262
             }
             i64toi32_i32$1 = $1;
             i64toi32_i32$0 = 0;
             HEAP32[($1 + 64 | 0) >> 2] = 0;
             HEAP32[($1 + 68 | 0) >> 2] = i64toi32_i32$0;
             $21 = HEAP32[($1 + 48 | 0) >> 2] | 0;
             $33 = ($37 | 0) / ($21 | 0) | 0;
             $35 = Math_imul($33, $21);
             $34 = HEAPU8[($43 + $37 | 0) >> 0] | 0;
             label$263 : {
              if (!$47) {
               break label$263
              }
              $34 = $34 & ((HEAPU8[($47 + $37 | 0) >> 0] | 0) ^ -1 | 0) | 0;
             }
             $39 = $37 - $35 | 0;
             $35 = $34 & 255 | 0;
             $40 = 0;
             label$264 : {
              if (!($34 & 1 | 0)) {
               break label$264
              }
              $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
              $34 = Math_imul(($33 + $34 | 0 | 0) % ($34 | 0) | 0, $21) + ((($39 + $21 | 0) + 1 | 0 | 0) % ($21 | 0) | 0) | 0;
              if (!((HEAPU8[($43 + $34 | 0) >> 0] | 0) & 4 | 0)) {
               break label$264
              }
              HEAP32[($1 + 72 | 0) >> 2] = $34;
              $40 = 1;
              HEAP32[($1 + 68 | 0) >> 2] = 1;
             }
             label$265 : {
              if (!($35 & 2 | 0)) {
               break label$265
              }
              $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
              $34 = Math_imul((($33 + $34 | 0) + -1 | 0 | 0) % ($34 | 0) | 0, $21) + (($39 + $21 | 0 | 0) % ($21 | 0) | 0) | 0;
              if (!((HEAPU8[($43 + $34 | 0) >> 0] | 0) & 8 | 0)) {
               break label$265
              }
              HEAP32[($45 + ($40 << 2 | 0) | 0) >> 2] = $34;
              $40 = $40 + 1 | 0;
              HEAP32[($1 + 68 | 0) >> 2] = $40;
             }
             label$266 : {
              if (!($35 & 4 | 0)) {
               break label$266
              }
              $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
              $21 = Math_imul(($33 + $34 | 0 | 0) % ($34 | 0) | 0, $21) + ((($39 + $21 | 0) + -1 | 0 | 0) % ($21 | 0) | 0) | 0;
              if (!((HEAPU8[($43 + $21 | 0) >> 0] | 0) & 1 | 0)) {
               break label$266
              }
              HEAP32[($1 + 68 | 0) >> 2] = $40 + 1 | 0;
              HEAP32[($45 + ($40 << 2 | 0) | 0) >> 2] = $21;
             }
             if (!($35 & 8 | 0)) {
              break label$262
             }
             $21 = HEAP32[($1 + 52 | 0) >> 2] | 0;
             $3702 = (($33 + $21 | 0) + 1 | 0 | 0) % ($21 | 0) | 0;
             $21 = HEAP32[($1 + 48 | 0) >> 2] | 0;
             $21 = Math_imul($3702, $21) + (($39 + $21 | 0 | 0) % ($21 | 0) | 0) | 0;
             if (!((HEAPU8[($43 + $21 | 0) >> 0] | 0) & 2 | 0)) {
              break label$262
             }
             $34 = HEAP32[($1 + 68 | 0) >> 2] | 0;
             HEAP32[($1 + 68 | 0) >> 2] = $34 + 1 | 0;
             HEAP32[($45 + ($34 << 2 | 0) | 0) >> 2] = $21;
            }
            label$267 : {
             $21 = HEAP32[($1 + 64 | 0) >> 2] | 0;
             $35 = HEAP32[($1 + 68 | 0) >> 2] | 0;
             if (($21 | 0) >= ($35 | 0)) {
              break label$267
             }
             HEAP32[($1 + 64 | 0) >> 2] = $21 + 1 | 0;
             $33 = $21 << 2 | 0;
             $34 = HEAP32[($45 + $33 | 0) >> 2] | 0;
             if (($34 | 0) < (0 | 0)) {
              break label$267
             }
             $39 = $35 + -1 | 0;
             $33 = $62 + $33 | 0;
             $42 = $38 + 12 | 0;
             $40 = $38 + 4 | 0;
             label$268 : while (1) {
              label$269 : {
               $35 = $36 + Math_imul($34, 44) | 0;
               if ((HEAP32[($35 + 4 | 0) >> 2] | 0 | 0) != (-2 | 0)) {
                break label$269
               }
               HEAP32[($35 + 4 | 0) >> 2] = -1;
               HEAP32[($35 + 8 | 0) >> 2] = HEAP32[$40 >> 2] | 0;
               HEAP32[$35 >> 2] = $37;
               HEAP32[($35 + 12 | 0) >> 2] = HEAP32[$42 >> 2] | 0;
               HEAP32[$40 >> 2] = $34;
              }
              if (($39 | 0) == ($21 | 0)) {
               break label$267
              }
              HEAP32[($1 + 64 | 0) >> 2] = $21 + 2 | 0;
              $21 = $21 + 1 | 0;
              $34 = HEAP32[$33 >> 2] | 0;
              $33 = $33 + 4 | 0;
              if (($34 | 0) > (-1 | 0)) {
               continue label$268
              }
              break label$268;
             };
            }
            $21 = HEAP32[($38 + 4 | 0) >> 2] | 0;
            if (($21 | 0) > (-1 | 0)) {
             continue label$260
            }
           }
           if (($37 | 0) == ($41 | 0)) {
            break label$259
           }
           $21 = HEAP32[($38 + 8 | 0) >> 2] | 0;
           if (($21 | 0) > (-1 | 0)) {
            continue label$260
           }
           $21 = HEAP32[$38 >> 2] | 0;
           continue label$260;
          };
         }
         $41 = $41 + 1 | 0;
         if (($41 | 0) != ($5 | 0)) {
          continue label$258
         }
         break label$258;
        };
        $35 = $5 & 7 | 0;
        $34 = 0;
        label$270 : {
         if ($18 >>> 0 < 7 >>> 0) {
          break label$270
         }
         $21 = $36 + 192 | 0;
         $34 = 0;
         label$271 : while (1) {
          HEAP8[$21 >> 0] = 0;
          HEAP8[($21 + 132 | 0) >> 0] = 0;
          HEAP8[($21 + 88 | 0) >> 0] = 0;
          HEAP8[($21 + 44 | 0) >> 0] = 0;
          HEAP8[($21 + -44 | 0) >> 0] = 0;
          HEAP8[($21 + -88 | 0) >> 0] = 0;
          HEAP8[($21 + -132 | 0) >> 0] = 0;
          HEAP8[($21 + -176 | 0) >> 0] = 0;
          $21 = $21 + 352 | 0;
          $34 = $34 + 8 | 0;
          if (($46 | 0) != ($34 | 0)) {
           continue label$271
          }
          break label$271;
         };
        }
        $39 = 1;
        if (!$35) {
         break label$251
        }
        $21 = ($36 + Math_imul($34, 44) | 0) + 16 | 0;
        $34 = $65;
        label$272 : while (1) {
         HEAP8[$21 >> 0] = 0;
         $21 = $21 + 44 | 0;
         $34 = $34 + -1 | 0;
         if ($34) {
          continue label$272
         }
         break label$251;
        };
       }
       $39 = 0;
      }
      $21 = $36 + $73 | 0;
      HEAP8[($21 + 16 | 0) >> 0] = 1;
      $38 = $21 + 16 | 0;
      $33 = 0;
      $21 = HEAP32[$74 >> 2] | 0;
      $35 = $21;
      label$273 : while (1) {
       label$274 : {
        $37 = $35;
        $34 = $36 + Math_imul($35, 44) | 0;
        if (HEAPU8[($34 + 16 | 0) >> 0] | 0) {
         break label$274
        }
        HEAP8[($34 + 16 | 0) >> 0] = 1;
        HEAP32[($34 + 24 | 0) >> 2] = $33;
        HEAP32[($34 + 20 | 0) >> 2] = $33;
        $33 = $33 + 1 | 0;
        $35 = HEAP32[($34 + 4 | 0) >> 2] | 0;
        if (($35 | 0) > (-1 | 0)) {
         continue label$273
        }
       }
       label$275 : {
        label$276 : {
         if (($37 | 0) != ($5 | 0)) {
          break label$276
         }
         label$277 : {
          if (!$39) {
           break label$277
          }
          $33 = $5 & 7 | 0;
          $35 = 0;
          label$278 : {
           $37 = $18 >>> 0 < 7 >>> 0;
           if ($37) {
            break label$278
           }
           $34 = $36 + 216 | 0;
           $35 = 0;
           label$279 : while (1) {
            HEAP32[$34 >> 2] = -1;
            HEAP32[($34 + 132 | 0) >> 2] = -1;
            HEAP32[($34 + 88 | 0) >> 2] = -1;
            HEAP32[($34 + 44 | 0) >> 2] = -1;
            HEAP32[($34 + -44 | 0) >> 2] = -1;
            HEAP32[($34 + -88 | 0) >> 2] = -1;
            HEAP32[($34 + -132 | 0) >> 2] = -1;
            HEAP32[($34 + -176 | 0) >> 2] = -1;
            $34 = $34 + 352 | 0;
            $35 = $35 + 8 | 0;
            if (($46 | 0) != ($35 | 0)) {
             continue label$279
            }
            break label$279;
           };
          }
          label$280 : {
           if (!$33) {
            break label$280
           }
           $34 = ($36 + Math_imul($35, 44) | 0) + 40 | 0;
           $35 = $65;
           label$281 : while (1) {
            HEAP32[$34 >> 2] = -1;
            $34 = $34 + 44 | 0;
            $35 = $35 + -1 | 0;
            if ($35) {
             continue label$281
            }
            break label$281;
           };
          }
          $35 = 0;
          label$282 : {
           if ($37) {
            break label$282
           }
           $34 = $36 + 192 | 0;
           $35 = 0;
           label$283 : while (1) {
            HEAP8[$34 >> 0] = 0;
            HEAP8[($34 + 132 | 0) >> 0] = 0;
            HEAP8[($34 + 88 | 0) >> 0] = 0;
            HEAP8[($34 + 44 | 0) >> 0] = 0;
            HEAP8[($34 + -44 | 0) >> 0] = 0;
            HEAP8[($34 + -88 | 0) >> 0] = 0;
            HEAP8[($34 + -132 | 0) >> 0] = 0;
            HEAP8[($34 + -176 | 0) >> 0] = 0;
            $34 = $34 + 352 | 0;
            $35 = $35 + 8 | 0;
            if (($46 | 0) != ($35 | 0)) {
             continue label$283
            }
            break label$283;
           };
          }
          if (!$33) {
           break label$277
          }
          $34 = ($36 + Math_imul($35, 44) | 0) + 16 | 0;
          $35 = $65;
          label$284 : while (1) {
           HEAP8[$34 >> 0] = 0;
           $34 = $34 + 44 | 0;
           $35 = $35 + -1 | 0;
           if ($35) {
            continue label$284
           }
           break label$284;
          };
         }
         HEAP8[$38 >> 0] = 1;
         label$285 : while (1) {
          $74 = HEAP32[($1 + 60 | 0) >> 2] | 0;
          $41 = HEAP32[($1 + 56 | 0) >> 2] | 0;
          label$286 : {
           label$287 : while (1) {
            $40 = $21;
            $33 = $36 + Math_imul($21, 44) | 0;
            if (HEAPU8[($33 + 16 | 0) >> 0] | 0) {
             break label$286
            }
            HEAP8[($33 + 16 | 0) >> 0] = 1;
            $37 = HEAP32[($33 + 24 | 0) >> 2] | 0;
            HEAP32[($33 + 36 | 0) >> 2] = $37;
            HEAP32[($33 + 32 | 0) >> 2] = $37;
            label$288 : {
             if (($40 | 0) < (0 | 0)) {
              break label$288
             }
             i64toi32_i32$1 = $1;
             i64toi32_i32$0 = 0;
             HEAP32[($1 + 64 | 0) >> 2] = 0;
             HEAP32[($1 + 68 | 0) >> 2] = i64toi32_i32$0;
             $21 = HEAP32[($1 + 48 | 0) >> 2] | 0;
             $38 = ($40 | 0) / ($21 | 0) | 0;
             $35 = Math_imul($38, $21);
             $34 = HEAPU8[($41 + $40 | 0) >> 0] | 0;
             label$289 : {
              if (!$74) {
               break label$289
              }
              $34 = $34 & ((HEAPU8[($74 + $40 | 0) >> 0] | 0) ^ -1 | 0) | 0;
             }
             $39 = $40 - $35 | 0;
             $35 = $34 & 255 | 0;
             $42 = 0;
             label$290 : {
              if (!($34 & 1 | 0)) {
               break label$290
              }
              $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
              $34 = Math_imul(($38 + $34 | 0 | 0) % ($34 | 0) | 0, $21) + ((($39 + $21 | 0) + 1 | 0 | 0) % ($21 | 0) | 0) | 0;
              if (!((HEAPU8[($41 + $34 | 0) >> 0] | 0) & 4 | 0)) {
               break label$290
              }
              HEAP32[($1 + 72 | 0) >> 2] = $34;
              $42 = 1;
              HEAP32[($1 + 68 | 0) >> 2] = 1;
             }
             label$291 : {
              if (!($35 & 2 | 0)) {
               break label$291
              }
              $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
              $34 = Math_imul((($38 + $34 | 0) + -1 | 0 | 0) % ($34 | 0) | 0, $21) + (($39 + $21 | 0 | 0) % ($21 | 0) | 0) | 0;
              if (!((HEAPU8[($41 + $34 | 0) >> 0] | 0) & 8 | 0)) {
               break label$291
              }
              HEAP32[($45 + ($42 << 2 | 0) | 0) >> 2] = $34;
              $42 = $42 + 1 | 0;
              HEAP32[($1 + 68 | 0) >> 2] = $42;
             }
             label$292 : {
              if (!($35 & 4 | 0)) {
               break label$292
              }
              $34 = HEAP32[($1 + 52 | 0) >> 2] | 0;
              $21 = Math_imul(($38 + $34 | 0 | 0) % ($34 | 0) | 0, $21) + ((($39 + $21 | 0) + -1 | 0 | 0) % ($21 | 0) | 0) | 0;
              if (!((HEAPU8[($41 + $21 | 0) >> 0] | 0) & 1 | 0)) {
               break label$292
              }
              HEAP32[($1 + 68 | 0) >> 2] = $42 + 1 | 0;
              HEAP32[($45 + ($42 << 2 | 0) | 0) >> 2] = $21;
             }
             if (!($35 & 8 | 0)) {
              break label$288
             }
             $21 = HEAP32[($1 + 52 | 0) >> 2] | 0;
             $4118 = (($38 + $21 | 0) + 1 | 0 | 0) % ($21 | 0) | 0;
             $21 = HEAP32[($1 + 48 | 0) >> 2] | 0;
             $21 = Math_imul($4118, $21) + (($39 + $21 | 0 | 0) % ($21 | 0) | 0) | 0;
             if (!((HEAPU8[($41 + $21 | 0) >> 0] | 0) & 2 | 0)) {
              break label$288
             }
             $34 = HEAP32[($1 + 68 | 0) >> 2] | 0;
             HEAP32[($1 + 68 | 0) >> 2] = $34 + 1 | 0;
             HEAP32[($45 + ($34 << 2 | 0) | 0) >> 2] = $21;
            }
            label$293 : {
             $21 = HEAP32[($1 + 64 | 0) >> 2] | 0;
             $35 = HEAP32[($1 + 68 | 0) >> 2] | 0;
             if (($21 | 0) >= ($35 | 0)) {
              break label$293
             }
             HEAP32[($1 + 64 | 0) >> 2] = $21 + 1 | 0;
             $39 = $21 << 2 | 0;
             $34 = HEAP32[($45 + $39 | 0) >> 2] | 0;
             if (($34 | 0) < (0 | 0)) {
              break label$293
             }
             $43 = $33 + 32 | 0;
             $47 = $33 + 36 | 0;
             $38 = $35 + -1 | 0;
             $35 = $62 + $39 | 0;
             $39 = HEAP32[$33 >> 2] | 0;
             $42 = $37;
             label$294 : while (1) {
              label$295 : {
               if (($34 | 0) == ($39 | 0)) {
                break label$295
               }
               label$296 : {
                $34 = HEAP32[(($36 + Math_imul($34, 44) | 0) + 20 | 0) >> 2] | 0;
                if (($42 | 0) <= ($34 | 0)) {
                 break label$296
                }
                HEAP32[$43 >> 2] = $34;
                $42 = $34;
               }
               if (($37 | 0) >= ($34 | 0)) {
                break label$295
               }
               HEAP32[$47 >> 2] = $34;
               $37 = $34;
              }
              if (($38 | 0) == ($21 | 0)) {
               break label$293
              }
              HEAP32[($1 + 64 | 0) >> 2] = $21 + 2 | 0;
              $21 = $21 + 1 | 0;
              $34 = HEAP32[$35 >> 2] | 0;
              $35 = $35 + 4 | 0;
              if (($34 | 0) > (-1 | 0)) {
               continue label$294
              }
              break label$294;
             };
            }
            $21 = HEAP32[($33 + 4 | 0) >> 2] | 0;
            if (($21 | 0) > (-1 | 0)) {
             continue label$287
            }
            break label$287;
           };
          }
          if (($40 | 0) == ($5 | 0)) {
           break label$275
          }
          label$297 : {
           $21 = HEAP32[($33 + 4 | 0) >> 2] | 0;
           if (($21 | 0) < (0 | 0)) {
            break label$297
           }
           $35 = $33 + 36 | 0;
           $38 = $33 + 32 | 0;
           $37 = HEAP32[($33 + 32 | 0) >> 2] | 0;
           label$298 : while (1) {
            label$299 : {
             $21 = $36 + Math_imul($21, 44) | 0;
             $34 = HEAP32[($21 + 32 | 0) >> 2] | 0;
             if (($37 | 0) <= ($34 | 0)) {
              break label$299
             }
             HEAP32[$38 >> 2] = $34;
             $37 = $34;
            }
            label$300 : {
             $34 = HEAP32[($21 + 36 | 0) >> 2] | 0;
             if ((HEAP32[$35 >> 2] | 0 | 0) >= ($34 | 0)) {
              break label$300
             }
             HEAP32[$35 >> 2] = $34;
            }
            $21 = HEAP32[($21 + 8 | 0) >> 2] | 0;
            if (($21 | 0) > (-1 | 0)) {
             continue label$298
            }
            break label$298;
           };
          }
          label$301 : {
           $21 = HEAP32[$33 >> 2] | 0;
           if (($21 | 0) == ($5 | 0)) {
            break label$301
           }
           if ((HEAP32[($33 + 32 | 0) >> 2] | 0 | 0) < (HEAP32[($33 + 24 | 0) >> 2] | 0 | 0)) {
            break label$301
           }
           if ((HEAP32[($33 + 36 | 0) >> 2] | 0 | 0) > (HEAP32[($33 + 28 | 0) >> 2] | 0 | 0)) {
            break label$301
           }
           HEAP32[($33 + 40 | 0) >> 2] = $21;
          }
          $34 = HEAP32[($33 + 8 | 0) >> 2] | 0;
          $21 = ($34 | 0) < (0 | 0) ? $21 : $34;
          continue label$285;
         };
        }
        HEAP32[($34 + 28 | 0) >> 2] = $33 + -1 | 0;
        $35 = HEAP32[($34 + 8 | 0) >> 2] | 0;
        if (($35 | 0) > (-1 | 0)) {
         continue label$273
        }
        $35 = HEAP32[$34 >> 2] | 0;
        continue label$273;
       }
       break label$273;
      };
      $47 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
      HEAP32[(0 + 1104 | 0) >> 2] = $47 + $20 | 0;
      label$302 : {
       if (!$63) {
        break label$302
       }
       $74 = $36 + 40 | 0;
       $72 = 0;
       $54 = $47;
       $71 = 0;
       label$303 : while (1) {
        $40 = $71 + $3 | 0;
        $41 = $40 + 1 | 0;
        $43 = $40 + -1 | 0;
        $37 = $54;
        $38 = $74;
        $35 = $72;
        $21 = $4;
        $39 = $21;
        label$304 : while (1) {
         $33 = 0;
         label$305 : {
          $34 = HEAPU8[($2 + $35 | 0) >> 0] | 0;
          if (!($34 & 1 | 0)) {
           break label$305
          }
          $42 = Math_imul(($40 | 0) % ($3 | 0) | 0, $4) + (($21 + 1 | 0 | 0) % ($4 | 0) | 0) | 0;
          if (!((HEAPU8[($2 + $42 | 0) >> 0] | 0) & 4 | 0)) {
           break label$305
          }
          if ((HEAP32[$38 >> 2] | 0 | 0) == ($42 | 0)) {
           break label$305
          }
          $33 = ($35 | 0) != (HEAP32[(($36 + Math_imul($42, 44) | 0) + 40 | 0) >> 2] | 0 | 0) & 1 | 0 ? 64 : 0;
         }
         label$306 : {
          if (!($34 & 2 | 0)) {
           break label$306
          }
          $42 = Math_imul(($43 | 0) % ($3 | 0) | 0, $4) + (($21 | 0) % ($4 | 0) | 0) | 0;
          if (!((HEAPU8[($2 + $42 | 0) >> 0] | 0) & 8 | 0)) {
           break label$306
          }
          if ((HEAP32[$38 >> 2] | 0 | 0) == ($42 | 0)) {
           break label$306
          }
          $33 = ($35 | 0) != (HEAP32[(($36 + Math_imul($42, 44) | 0) + 40 | 0) >> 2] | 0 | 0) & 1 | 0 ? $33 | 128 | 0 : $33;
         }
         label$307 : {
          if (!($34 & 4 | 0)) {
           break label$307
          }
          $42 = Math_imul(($40 | 0) % ($3 | 0) | 0, $4) + (($21 + -1 | 0 | 0) % ($4 | 0) | 0) | 0;
          if (!((HEAPU8[($2 + $42 | 0) >> 0] | 0) & 1 | 0)) {
           break label$307
          }
          if ((HEAP32[$38 >> 2] | 0 | 0) == ($42 | 0)) {
           break label$307
          }
          $33 = ($35 | 0) != (HEAP32[(($36 + Math_imul($42, 44) | 0) + 40 | 0) >> 2] | 0 | 0) & 1 | 0 ? $33 | 256 | 0 : $33;
         }
         label$308 : {
          if (!($34 & 8 | 0)) {
           break label$308
          }
          $34 = Math_imul(($41 | 0) % ($3 | 0) | 0, $4) + (($21 | 0) % ($4 | 0) | 0) | 0;
          if (!((HEAPU8[($2 + $34 | 0) >> 0] | 0) & 2 | 0)) {
           break label$308
          }
          if ((HEAP32[$38 >> 2] | 0 | 0) == ($34 | 0)) {
           break label$308
          }
          $33 = ($35 | 0) != (HEAP32[(($36 + Math_imul($34, 44) | 0) + 40 | 0) >> 2] | 0 | 0) & 1 | 0 ? $33 | 512 | 0 : $33;
         }
         HEAP32[$37 >> 2] = $33;
         $37 = $37 + 4 | 0;
         $38 = $38 + 44 | 0;
         $35 = $35 + 1 | 0;
         $21 = $21 + 1 | 0;
         $39 = $39 + -1 | 0;
         if ($39) {
          continue label$304
         }
         break label$304;
        };
        $54 = $54 + $53 | 0;
        $74 = $74 + $52 | 0;
        $72 = $72 + $4 | 0;
        $71 = $71 + 1 | 0;
        if (($71 | 0) != ($3 | 0)) {
         continue label$303
        }
        break label$303;
       };
      }
      if (($5 | 0) < (1 | 0)) {
       break label$249
      }
      $33 = 0;
      $21 = $2;
      $35 = $5;
      label$309 : while (1) {
       label$310 : {
        if (!(HEAP32[$47 >> 2] | 0)) {
         break label$310
        }
        $34 = HEAPU8[$21 >> 0] | 0;
        label$311 : {
         label$312 : {
          switch ((undefined_weak_JS_random_upto(4 | 0) | 0) & 3 | 0 | 0) {
          case 1:
           $34 = ($34 << 1 | 0) & 14 | 0 | (($34 >>> 3 | 0) & 1 | 0) | 0;
           break label$311;
          case 2:
           $34 = ($34 >>> 2 | 0) & 3 | 0 | (($34 << 2 | 0) & 12 | 0) | 0;
           break label$311;
          case 0:
           break label$311;
          default:
           break label$312;
          };
         }
         $34 = ($34 >>> 1 | 0) & 7 | 0 | (($34 << 3 | 0) & 8 | 0) | 0;
        }
        HEAP8[$21 >> 0] = $34;
        $33 = $33 + 1 | 0;
       }
       $47 = $47 + 4 | 0;
       $21 = $21 + 1 | 0;
       $35 = $35 + -1 | 0;
       if ($35) {
        continue label$309
       }
       break label$309;
      };
      if (($33 | 0) > ($50 | 0)) {
       continue label$240
      }
      $50 = $33;
      if ($33) {
       continue label$250
      }
      break label$250;
     };
     if (($3 | 0) < (1 | 0)) {
      continue label$240
     }
     break label$248;
    }
    if (($3 | 0) < (1 | 0)) {
     continue label$240
    }
    if (($5 | 0) <= (-2 | 0)) {
     continue label$240
    }
   }
   $40 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
   if (($4 | 0) < (1 | 0)) {
    continue label$240
   }
   $38 = $2 + $40 | 0;
   $39 = 0;
   $36 = $2;
   $34 = 0;
   label$315 : while (1) {
    label$316 : {
     label$317 : {
      $39 = $39 + 1 | 0;
      if (($39 | 0) < ($3 | 0)) {
       break label$317
      }
      $35 = 0;
      label$318 : while (1) {
       label$319 : {
        $21 = $35 + 1 | 0;
        if (($21 | 0) >= ($4 | 0)) {
         break label$319
        }
        $35 = $36 + $35 | 0;
        $34 = (((((HEAPU8[$35 >> 0] | 0) << 2 | 0) ^ (HEAPU8[($35 + 1 | 0) >> 0] | 0) | 0) >>> 2 | 0) & 1 | 0) + $34 | 0;
       }
       $35 = $21;
       if (($4 | 0) != ($21 | 0)) {
        continue label$318
       }
       break label$316;
      };
     }
     $21 = 0;
     label$320 : while (1) {
      $37 = $36 + $21 | 0;
      $33 = HEAPU8[$37 >> 0] | 0;
      label$321 : {
       $35 = $21 + 1 | 0;
       if (($35 | 0) >= ($4 | 0)) {
        break label$321
       }
       $34 = (((($33 << 2 | 0) ^ (HEAPU8[($37 + 1 | 0) >> 0] | 0) | 0) >>> 2 | 0) & 1 | 0) + $34 | 0;
      }
      $34 = $34 + ((($33 >>> 3 | 0) ^ ((HEAPU8[($38 + $21 | 0) >> 0] | 0) >>> 1 | 0) | 0) & 1 | 0) | 0;
      $21 = $35;
      if (($4 | 0) != ($21 | 0)) {
       continue label$320
      }
      break label$320;
     };
    }
    $38 = $38 + $40 | 0;
    $36 = $36 + $40 | 0;
    if (($39 | 0) != ($3 | 0)) {
     continue label$315
    }
    break label$315;
   };
   if (!$34) {
    continue label$240
   }
   break label$240;
  };
  $78 = Math_fround(HEAPF32[(1088 + 12 | 0) >> 2]);
  label$322 : {
   label$323 : {
    $21 = HEAP32[$58 >> 2] | 0;
    if ($21) {
     break label$323
    }
    $79 = Math_fround(0.0);
    break label$322;
   }
   $79 = Math_fround(((((((HEAP32[($21 + 24 | 0) >> 2] | 0) + (HEAP32[($21 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($21 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0 | 0);
  }
  label$324 : {
   label$325 : {
    $78 = Math_fround($78 * $79);
    if (!(Math_fround(Math_abs($78)) < Math_fround(2147483648.0))) {
     break label$325
    }
    $34 = ~~$78;
    break label$324;
   }
   $34 = -2147483648;
  }
  label$326 : {
   if (($34 | 0) < (1 | 0)) {
    break label$326
   }
   $33 = $34 + 1 | 0;
   label$327 : while (1) {
    $34 = 0;
    label$328 : {
     $21 = HEAP32[$58 >> 2] | 0;
     if (!$21) {
      break label$328
     }
     $34 = ((((((HEAP32[($21 + 24 | 0) >> 2] | 0) + (HEAP32[($21 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($21 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    }
    $21 = delpos234_internal($58 | 0, undefined_weak_JS_random_upto($34 | 0) | 0 | 0) | 0;
    $34 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
    $35 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
    $36 = HEAP32[($21 + 4 | 0) >> 2] | 0;
    $37 = HEAP32[$21 >> 2] | 0;
    $38 = $6 + (Math_imul($35, $36) + $37 | 0) | 0;
    $21 = HEAP32[($21 + 8 | 0) >> 2] | 0;
    HEAP8[$38 >> 0] = HEAPU8[$38 >> 0] | 0 | $21 | 0;
    $34 = $6 + (Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, ($34 + ($36 + (($21 | 0) == (8 | 0) ? 1 : ($21 | 0) == (2 | 0) ? -1 : 0) | 0) | 0 | 0) % ($34 | 0) | 0) + ((($35 + $37 | 0) + (($21 | 0) == (1 | 0) ? 1 : ($21 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($35 | 0) | 0) | 0) | 0;
    HEAP8[$34 >> 0] = HEAPU8[$34 >> 0] | 0 | (($21 >>> 2 | 0) & 3 | 0 | (($21 << 2 | 0) & 12 | 0) | 0) | 0;
    $33 = $33 + -1 | 0;
    if (($33 | 0) > (1 | 0)) {
     continue label$327
    }
    break label$327;
   };
   $21 = HEAP32[$58 >> 2] | 0;
  }
  label$329 : {
   if (!$21) {
    break label$329
   }
   if ((((((((HEAP32[($21 + 24 | 0) >> 2] | 0) + (HEAP32[($21 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($21 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0 | 0) < (1 | 0)) {
    break label$329
   }
   if (!(delpos234_internal($58 | 0, 0 | 0) | 0)) {
    break label$329
   }
   label$330 : while (1) {
    $21 = HEAP32[$58 >> 2] | 0;
    if (!$21) {
     break label$329
    }
    if ((((((((HEAP32[($21 + 24 | 0) >> 2] | 0) + (HEAP32[($21 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($21 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($21 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($21 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0 | 0) < (1 | 0)) {
     break label$329
    }
    if (delpos234_internal($58 | 0, 0 | 0) | 0) {
     continue label$330
    }
    break label$330;
   };
  }
  freenode234(HEAP32[$58 >> 2] | 0 | 0);
  $37 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = (Math_imul($5, 3) + $37 | 0) + 1 | 0;
  $35 = 0;
  $21 = $37;
  label$331 : while (1) {
   label$332 : {
    label$333 : {
     if (($35 | 0) < ($8 | 0)) {
      break label$333
     }
     $34 = 0;
     label$334 : while (1) {
      HEAP8[$21 >> 0] = HEAPU8[((HEAPU8[($2 + ($34 + Math_imul($35, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) + 1024 | 0) >> 0] | 0;
      $36 = $21 + 1 | 0;
      $33 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
      label$335 : {
       label$336 : {
        if (($34 | 0) < ($12 | 0)) {
         break label$336
        }
        if ($33 & 255 | 0) {
         break label$336
        }
        $21 = $36;
        break label$335;
       }
       label$337 : {
        if (!((HEAPU8[($6 + ($34 + Math_imul($35, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) & 1 | 0)) {
         break label$337
        }
        HEAP8[($21 + 1 | 0) >> 0] = 118;
        $36 = $21 + 2 | 0;
        $33 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
       }
       label$338 : {
        if ($33 & 255 | 0) {
         break label$338
        }
        $21 = $36;
        break label$335;
       }
       label$339 : {
        if ((HEAPU8[($6 + ($34 + Math_imul($35, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) & 8 | 0) {
         break label$339
        }
        $21 = $36;
        break label$335;
       }
       HEAP8[$36 >> 0] = 104;
       $21 = $36 + 1 | 0;
      }
      $34 = $34 + 1 | 0;
      if (($4 | 0) != ($34 | 0)) {
       continue label$334
      }
      break label$332;
     };
    }
    $34 = 0;
    $36 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
    label$340 : while (1) {
     HEAP8[$21 >> 0] = HEAPU8[((HEAPU8[($2 + ($34 + Math_imul($35, $36) | 0) | 0) >> 0] | 0) + 1024 | 0) >> 0] | 0;
     $33 = $21 + 1 | 0;
     label$341 : {
      label$342 : {
       if (($34 | 0) < ($12 | 0)) {
        break label$342
       }
       if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
        break label$341
       }
      }
      if (!((HEAPU8[($6 + ($34 + Math_imul($35, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) & 1 | 0)) {
       break label$341
      }
      HEAP8[($21 + 1 | 0) >> 0] = 118;
      $33 = $21 + 2 | 0;
     }
     label$343 : {
      label$344 : {
       $36 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
       if ((HEAPU8[($6 + ($34 + Math_imul($35, $36) | 0) | 0) >> 0] | 0) & 8 | 0) {
        break label$344
       }
       $21 = $33;
       break label$343;
      }
      HEAP8[$33 >> 0] = 104;
      $21 = $33 + 1 | 0;
      $36 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     }
     $34 = $34 + 1 | 0;
     if (($4 | 0) != ($34 | 0)) {
      continue label$340
     }
     break label$340;
    };
   }
   $35 = $35 + 1 | 0;
   if (($35 | 0) != ($3 | 0)) {
    continue label$331
   }
   break label$331;
  };
  HEAP8[$21 >> 0] = 0;
  __stack_pointer = $1 + 96 | 0;
  return $37 | 0;
 }
 
 function xyd_cmp_nc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   $3 = HEAP32[$1 >> 2] | 0;
   if (($2 | 0) >= ($3 | 0)) {
    break label$1
   }
   return -1 | 0;
  }
  $4 = 1;
  label$2 : {
   if (($2 | 0) > ($3 | 0)) {
    break label$2
   }
   label$3 : {
    $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (($2 | 0) >= ($3 | 0)) {
     break label$3
    }
    return -1 | 0;
   }
   if (($2 | 0) > ($3 | 0)) {
    break label$2
   }
   $4 = -1;
   $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
   if (($0 | 0) < ($1 | 0)) {
    break label$2
   }
   $4 = ($0 | 0) > ($1 | 0);
  }
  return $4 | 0;
 }
 
 function add234_internal($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  label$1 : {
   $3 = HEAP32[$0 >> 2] | 0;
   if (!$3) {
    break label$1
   }
   label$2 : while (1) {
    $4 = $3;
    label$3 : {
     label$4 : {
      if (($2 | 0) < (0 | 0)) {
       break label$4
      }
      label$5 : {
       if (HEAP32[($4 + 4 | 0) >> 2] | 0) {
        break label$5
       }
       $5 = $2;
       break label$3;
      }
      $5 = 0;
      $3 = HEAP32[($4 + 20 | 0) >> 2] | 0;
      if (($2 | 0) <= ($3 | 0)) {
       break label$3
      }
      $5 = 1;
      $2 = $2 + ($3 ^ -1 | 0) | 0;
      $3 = HEAP32[($4 + 24 | 0) >> 2] | 0;
      if (($2 | 0) <= ($3 | 0)) {
       break label$3
      }
      $5 = 2;
      $2 = $2 + ($3 ^ -1 | 0) | 0;
      $3 = HEAP32[($4 + 28 | 0) >> 2] | 0;
      if (($2 | 0) <= ($3 | 0)) {
       break label$3
      }
      $5 = 3;
      $2 = $2 + ($3 ^ -1 | 0) | 0;
      if (($2 | 0) <= (HEAP32[($4 + 32 | 0) >> 2] | 0 | 0)) {
       break label$3
      }
      return 0 | 0;
     }
     $5 = 0;
     $3 = FUNCTION_TABLE[HEAP32[($0 + 4 | 0) >> 2] | 0 | 0]($1, HEAP32[($4 + 36 | 0) >> 2] | 0) | 0;
     if (($3 | 0) < (0 | 0)) {
      break label$3
     }
     label$6 : {
      if ($3) {
       break label$6
      }
      return HEAP32[($4 + 36 | 0) >> 2] | 0 | 0;
     }
     $5 = 1;
     $3 = HEAP32[($4 + 40 | 0) >> 2] | 0;
     if (!$3) {
      break label$3
     }
     $3 = FUNCTION_TABLE[HEAP32[($0 + 4 | 0) >> 2] | 0 | 0]($1, $3) | 0;
     if (($3 | 0) < (0 | 0)) {
      break label$3
     }
     label$7 : {
      if ($3) {
       break label$7
      }
      return HEAP32[($4 + 40 | 0) >> 2] | 0 | 0;
     }
     $5 = 2;
     $3 = HEAP32[($4 + 44 | 0) >> 2] | 0;
     if (!$3) {
      break label$3
     }
     $3 = FUNCTION_TABLE[HEAP32[($0 + 4 | 0) >> 2] | 0 | 0]($1, $3) | 0;
     if (($3 | 0) < (0 | 0)) {
      break label$3
     }
     $5 = 3;
     if ($3) {
      break label$3
     }
     return HEAP32[($4 + 44 | 0) >> 2] | 0 | 0;
    }
    $3 = HEAP32[(($4 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    if ($3) {
     continue label$2
    }
    break label$2;
   };
   add234_insert(0 | 0, $1 | 0, 0 | 0, $0 | 0, $4 | 0, $5 | 0) | 0;
   return $1 | 0;
  }
  $4 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[$0 >> 2] = $4;
  HEAP32[($4 + 8 | 0) >> 2] = 0;
  i64toi32_i32$1 = $4 + 40 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[((HEAP32[$0 >> 2] | 0) + 4 | 0) >> 2] = 0;
  HEAP32[((HEAP32[$0 >> 2] | 0) + 16 | 0) >> 2] = 0;
  HEAP32[((HEAP32[$0 >> 2] | 0) + 12 | 0) >> 2] = 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $4 + 48 | 0;
  $4 = HEAP32[$0 >> 2] | 0;
  HEAP32[$4 >> 2] = 0;
  HEAP32[($4 + 36 | 0) >> 2] = $1;
  i64toi32_i32$1 = $4;
  i64toi32_i32$0 = 0;
  HEAP32[($4 + 20 | 0) >> 2] = 0;
  HEAP32[($4 + 24 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $4 + 28 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  return $1 | 0;
 }
 
 function delpos234_internal($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $6 = 0, $3 = 0, $2 = 0, $7 = 0, $9 = 0, $5 = 0, $8 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $10 = 0, i64toi32_i32$2 = 0, $11 = 0, $4 = 0, $12 = 0, $137 = 0, $144 = 0, $195 = 0, $197 = 0, $280 = 0, $291 = 0, $295 = 0, $305 = 0, $330 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[($2 + 12 | 0) >> 2] = $1;
  $3 = HEAP32[$0 >> 2] | 0;
  $4 = 0;
  label$1 : while (1) {
   label$2 : {
    label$3 : {
     $5 = $3;
     $6 = HEAP32[($3 + 20 | 0) >> 2] | 0;
     if (($1 | 0) > ($6 | 0)) {
      break label$3
     }
     HEAP32[($2 + 8 | 0) >> 2] = 0;
     break label$2;
    }
    $1 = $1 + ($6 ^ -1 | 0) | 0;
    HEAP32[($2 + 12 | 0) >> 2] = $1;
    label$4 : {
     $6 = HEAP32[($5 + 24 | 0) >> 2] | 0;
     if (($1 | 0) > ($6 | 0)) {
      break label$4
     }
     HEAP32[($2 + 8 | 0) >> 2] = 1;
     break label$2;
    }
    $1 = $1 + ($6 ^ -1 | 0) | 0;
    HEAP32[($2 + 12 | 0) >> 2] = $1;
    label$5 : {
     $6 = HEAP32[($5 + 28 | 0) >> 2] | 0;
     if (($1 | 0) > ($6 | 0)) {
      break label$5
     }
     HEAP32[($2 + 8 | 0) >> 2] = 2;
     break label$2;
    }
    $1 = $1 + ($6 ^ -1 | 0) | 0;
    HEAP32[($2 + 12 | 0) >> 2] = $1;
    if (($1 | 0) > (HEAP32[($5 + 32 | 0) >> 2] | 0 | 0)) {
     break label$2
    }
    HEAP32[($2 + 8 | 0) >> 2] = 3;
   }
   label$6 : {
    if (!(HEAP32[($5 + 4 | 0) >> 2] | 0)) {
     break label$6
    }
    label$7 : {
     label$8 : {
      $7 = HEAP32[($2 + 8 | 0) >> 2] | 0;
      $8 = $5 + ($7 << 2 | 0) | 0;
      if (($1 | 0) == (HEAP32[($8 + 20 | 0) >> 2] | 0 | 0)) {
       break label$8
      }
      $3 = HEAP32[($8 + 4 | 0) >> 2] | 0;
      break label$7;
     }
     HEAP32[($2 + 12 | 0) >> 2] = 0;
     $7 = $7 + 1 | 0;
     HEAP32[($2 + 8 | 0) >> 2] = $7;
     $3 = HEAP32[(($5 + ($7 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
     $1 = $3;
     label$9 : while (1) {
      $6 = $1;
      $1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
      if ($1) {
       continue label$9
      }
      break label$9;
     };
     $1 = $8 + 36 | 0;
     $4 = HEAP32[$1 >> 2] | 0;
     HEAP32[$1 >> 2] = HEAP32[($6 + 36 | 0) >> 2] | 0;
    }
    label$10 : {
     $1 = HEAP32[($3 + 40 | 0) >> 2] | 0;
     if ($1) {
      break label$10
     }
     label$11 : {
      label$12 : {
       label$13 : {
        if (($7 | 0) < (1 | 0)) {
         break label$13
        }
        label$14 : {
         $8 = $7 + -1 | 0;
         $9 = $8 << 2 | 0;
         $10 = $5 + $9 | 0;
         $6 = HEAP32[($10 + 4 | 0) >> 2] | 0;
         if (!(HEAP32[($6 + 40 | 0) >> 2] | 0)) {
          break label$14
         }
         HEAP32[($3 + 40 | 0) >> 2] = HEAP32[($3 + 36 | 0) >> 2] | 0;
         HEAP32[($3 + 44 | 0) >> 2] = $1;
         $1 = HEAP32[($3 + 28 | 0) >> 2] | 0;
         i64toi32_i32$2 = $3;
         i64toi32_i32$0 = HEAP32[($3 + 20 | 0) >> 2] | 0;
         i64toi32_i32$1 = HEAP32[($3 + 24 | 0) >> 2] | 0;
         $137 = i64toi32_i32$0;
         i64toi32_i32$0 = $3 + 24 | 0;
         HEAP32[i64toi32_i32$0 >> 2] = $137;
         HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
         $11 = HEAP32[($3 + 12 | 0) >> 2] | 0;
         i64toi32_i32$2 = $3;
         i64toi32_i32$1 = HEAP32[($3 + 4 | 0) >> 2] | 0;
         i64toi32_i32$0 = HEAP32[($3 + 8 | 0) >> 2] | 0;
         $144 = i64toi32_i32$1;
         i64toi32_i32$1 = $3 + 8 | 0;
         HEAP32[i64toi32_i32$1 >> 2] = $144;
         HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
         HEAP32[($3 + 16 | 0) >> 2] = $11;
         HEAP32[($3 + 32 | 0) >> 2] = $1;
         $1 = 2;
         label$15 : {
          if (HEAP32[($6 + 44 | 0) >> 2] | 0) {
           break label$15
          }
          $1 = (HEAP32[($6 + 40 | 0) >> 2] | 0 | 0) != (0 | 0);
         }
         $10 = $10 + 36 | 0;
         HEAP32[($3 + 36 | 0) >> 2] = HEAP32[$10 >> 2] | 0;
         $1 = ($1 << 2 | 0) + $6 | 0;
         $6 = $1 + 36 | 0;
         HEAP32[$10 >> 2] = HEAP32[$6 >> 2] | 0;
         HEAP32[$6 >> 2] = 0;
         $6 = $1 + 8 | 0;
         HEAP32[($3 + 4 | 0) >> 2] = HEAP32[$6 >> 2] | 0;
         $1 = $1 + 24 | 0;
         HEAP32[($3 + 20 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
         HEAP32[$6 >> 2] = 0;
         HEAP32[$1 >> 2] = 0;
         label$16 : {
          $1 = HEAP32[($3 + 4 | 0) >> 2] | 0;
          if (!$1) {
           break label$16
          }
          HEAP32[$1 >> 2] = $3;
         }
         $6 = $5 + 20 | 0;
         $1 = $6 + $9 | 0;
         $195 = $1;
         $197 = HEAP32[$1 >> 2] | 0;
         $1 = (HEAP32[($3 + 20 | 0) >> 2] | 0) + 1 | 0;
         $9 = $197 - $1 | 0;
         HEAP32[$195 >> 2] = $9;
         $6 = $6 + ($7 << 2 | 0) | 0;
         HEAP32[$6 >> 2] = (HEAP32[$6 >> 2] | 0) + $1 | 0;
         label$17 : {
          $6 = HEAP32[($2 + 8 | 0) >> 2] | 0;
          if (($6 | 0) != ($8 | 0)) {
           break label$17
          }
          $8 = HEAP32[($2 + 12 | 0) >> 2] | 0;
          if (($8 | 0) <= ($9 | 0)) {
           break label$17
          }
          HEAP32[($2 + 8 | 0) >> 2] = $7;
          HEAP32[($2 + 12 | 0) >> 2] = $8 + ($9 ^ -1 | 0) | 0;
          break label$10;
         }
         if (($6 | 0) == ($7 | 0)) {
          break label$11
         }
         $7 = $6;
         break label$10;
        }
        if (($7 | 0) > (2 | 0)) {
         break label$12
        }
       }
       $6 = $7 + 1 | 0;
       $8 = $6 << 2 | 0;
       $1 = HEAP32[(($5 + $8 | 0) + 4 | 0) >> 2] | 0;
       if (!$1) {
        break label$12
       }
       if (!(HEAP32[($1 + 40 | 0) >> 2] | 0)) {
        break label$12
       }
       $9 = HEAP32[($3 + 36 | 0) >> 2] | 0;
       $10 = $7 << 2 | 0;
       $11 = ($5 + $10 | 0) + 36 | 0;
       HEAP32[(($3 + 36 | 0) + ((($9 | 0) != (0 | 0)) << 2 | 0) | 0) >> 2] = HEAP32[$11 >> 2] | 0;
       HEAP32[$11 >> 2] = HEAP32[($1 + 36 | 0) >> 2] | 0;
       $9 = $3 + ($9 ? 8 : 4) | 0;
       $11 = $9 + 20 | 0;
       HEAP32[$11 >> 2] = HEAP32[($1 + 20 | 0) >> 2] | 0;
       $280 = $9 + 4 | 0;
       $9 = HEAP32[($1 + 4 | 0) >> 2] | 0;
       HEAP32[$280 >> 2] = $9;
       label$18 : {
        if (!$9) {
         break label$18
        }
        HEAP32[$9 >> 2] = $3;
       }
       i64toi32_i32$2 = $1 + 8 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $291 = i64toi32_i32$0;
       i64toi32_i32$0 = $1;
       HEAP32[($1 + 4 | 0) >> 2] = $291;
       HEAP32[($1 + 8 | 0) >> 2] = i64toi32_i32$1;
       i64toi32_i32$2 = $1 + 24 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $295 = i64toi32_i32$1;
       i64toi32_i32$1 = $1;
       HEAP32[($1 + 20 | 0) >> 2] = $295;
       HEAP32[($1 + 24 | 0) >> 2] = i64toi32_i32$0;
       $9 = $1 + 32 | 0;
       HEAP32[($1 + 28 | 0) >> 2] = HEAP32[$9 >> 2] | 0;
       HEAP32[$9 >> 2] = 0;
       i64toi32_i32$2 = $1;
       i64toi32_i32$0 = HEAP32[($1 + 40 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($1 + 44 | 0) >> 2] | 0;
       $305 = i64toi32_i32$0;
       i64toi32_i32$0 = $1;
       HEAP32[($1 + 36 | 0) >> 2] = $305;
       HEAP32[($1 + 40 | 0) >> 2] = i64toi32_i32$1;
       $12 = $5 + 20 | 0;
       $10 = $12 + $10 | 0;
       $9 = (HEAP32[$11 >> 2] | 0) + 1 | 0;
       HEAP32[$10 >> 2] = (HEAP32[$10 >> 2] | 0) + $9 | 0;
       $8 = $12 + $8 | 0;
       HEAP32[$8 >> 2] = (HEAP32[$8 >> 2] | 0) - $9 | 0;
       HEAP32[($1 + 44 | 0) >> 2] = 0;
       $330 = $1 + 12 | 0;
       $1 = $1 + 16 | 0;
       HEAP32[$330 >> 2] = HEAP32[$1 >> 2] | 0;
       HEAP32[$1 >> 2] = 0;
       label$19 : {
        $1 = HEAP32[($2 + 8 | 0) >> 2] | 0;
        if (($1 | 0) == ($6 | 0)) {
         break label$19
        }
        $7 = $1;
        break label$10;
       }
       $1 = (HEAP32[($2 + 12 | 0) >> 2] | 0) - $9 | 0;
       HEAP32[($2 + 12 | 0) >> 2] = $1;
       label$20 : {
        if (($1 | 0) <= (-1 | 0)) {
         break label$20
        }
        $7 = $6;
        break label$10;
       }
       $6 = HEAP32[$10 >> 2] | 0;
       HEAP32[($2 + 8 | 0) >> 2] = $7;
       HEAP32[($2 + 12 | 0) >> 2] = ($1 + $6 | 0) + 1 | 0;
       break label$10;
      }
      trans234_subtree_merge($5 | 0, $7 - (($7 | 0) > (0 | 0)) | 0 | 0, $2 + 8 | 0 | 0, $2 + 12 | 0 | 0);
      $7 = HEAP32[($2 + 8 | 0) >> 2] | 0;
      $3 = HEAP32[(($5 + ($7 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
      if (HEAP32[($5 + 36 | 0) >> 2] | 0) {
       break label$10
      }
      HEAP32[$3 >> 2] = 0;
      HEAP32[$0 >> 2] = $3;
      $1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
      continue label$1;
     }
     HEAP32[($2 + 12 | 0) >> 2] = (HEAP32[($2 + 12 | 0) >> 2] | 0) + $1 | 0;
    }
    $1 = ($5 + ($7 << 2 | 0) | 0) + 20 | 0;
    HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + -1 | 0;
    $1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
    continue label$1;
   }
   break label$1;
  };
  $6 = HEAP32[($2 + 8 | 0) >> 2] | 0;
  label$21 : {
   if ($4) {
    break label$21
   }
   $4 = HEAP32[(($5 + ($6 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
  }
  label$22 : {
   label$23 : {
    if (($6 | 0) <= (1 | 0)) {
     break label$23
    }
    $7 = $6;
    break label$22;
   }
   $1 = (($6 << 2 | 0) + $5 | 0) + 36 | 0;
   label$24 : while (1) {
    label$25 : {
     $3 = $1 + 4 | 0;
     $7 = HEAP32[$3 >> 2] | 0;
     if ($7) {
      break label$25
     }
     $7 = $6;
     break label$22;
    }
    HEAP32[$1 >> 2] = $7;
    $7 = 2;
    $1 = $3;
    $6 = $6 + 1 | 0;
    if (($6 | 0) != (2 | 0)) {
     continue label$24
    }
    break label$24;
   };
  }
  HEAP32[(($5 + 36 | 0) + ($7 << 2 | 0) | 0) >> 2] = 0;
  label$26 : {
   if (HEAP32[($5 + 36 | 0) >> 2] | 0) {
    break label$26
   }
   HEAP32[$0 >> 2] = 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $4 | 0;
 }
 
 function del234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $5 = 0, $2 = 0, $4 = 0, $6 = 0, $3 = 0, $7 = 0;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   if ($2) {
    break label$1
   }
   return 0 | 0;
  }
  $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $4 = 0;
  label$2 : while (1) {
   label$3 : {
    label$4 : {
     $5 = HEAP32[($2 + 36 | 0) >> 2] | 0;
     if ($5) {
      break label$4
     }
     $6 = 0;
     break label$3;
    }
    $6 = 0;
    $5 = FUNCTION_TABLE[$3 | 0]($1, $5) | 0;
    if (($5 | 0) < (0 | 0)) {
     break label$3
    }
    label$5 : {
     if (!(HEAP32[($2 + 4 | 0) >> 2] | 0)) {
      break label$5
     }
     $4 = (HEAP32[($2 + 20 | 0) >> 2] | 0) + $4 | 0;
    }
    $7 = 0;
    label$6 : {
     label$7 : {
      label$8 : {
       if ($5) {
        break label$8
       }
       $6 = 0;
       break label$7;
      }
      $6 = 1;
      $4 = $4 + 1 | 0;
      $5 = HEAP32[($2 + 40 | 0) >> 2] | 0;
      if (!$5) {
       break label$3
      }
      $5 = FUNCTION_TABLE[$3 | 0]($1, $5) | 0;
      if (($5 | 0) < (0 | 0)) {
       break label$3
      }
      label$9 : {
       if (!(HEAP32[($2 + 8 | 0) >> 2] | 0)) {
        break label$9
       }
       $4 = (HEAP32[($2 + 24 | 0) >> 2] | 0) + $4 | 0;
      }
      label$10 : {
       if ($5) {
        break label$10
       }
       $6 = 1;
       break label$7;
      }
      $4 = $4 + 1 | 0;
      $6 = 2;
      $5 = HEAP32[($2 + 44 | 0) >> 2] | 0;
      if (!$5) {
       break label$3
      }
      $5 = FUNCTION_TABLE[$3 | 0]($1, $5) | 0;
      if (($5 | 0) < (0 | 0)) {
       break label$3
      }
      label$11 : {
       if (!(HEAP32[($2 + 12 | 0) >> 2] | 0)) {
        break label$11
       }
       $4 = (HEAP32[($2 + 28 | 0) >> 2] | 0) + $4 | 0;
      }
      if ($5) {
       break label$6
      }
      $6 = 2;
     }
     label$12 : {
      if (!(HEAP32[(($2 + ($6 << 2 | 0) | 0) + 36 | 0) >> 2] | 0)) {
       break label$12
      }
      $7 = delpos234_internal($0 | 0, $4 | 0) | 0;
     }
     return $7 | 0;
    }
    $4 = $4 + 1 | 0;
    $6 = 3;
   }
   $2 = HEAP32[(($2 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
   if ($2) {
    continue label$2
   }
   break label$2;
  };
  return 0 | 0;
 }
 
 function freenode234($0) {
  $0 = $0 | 0;
  label$1 : {
   label$2 : while (1) {
    if (!$0) {
     break label$1
    }
    freenode234(HEAP32[($0 + 4 | 0) >> 2] | 0 | 0);
    freenode234(HEAP32[($0 + 8 | 0) >> 2] | 0 | 0);
    freenode234(HEAP32[($0 + 12 | 0) >> 2] | 0 | 0);
    $0 = HEAP32[($0 + 16 | 0) >> 2] | 0;
    continue label$2;
   };
  }
 }
 
 function perturb($0, $1, $2, $3, $4, $5, $6) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  var $16 = 0, $11 = 0, $9 = 0, $18 = 0, $10 = 0, $17 = 0, $7 = 0, $8 = 0, i64toi32_i32$0 = 0, $12 = 0, $19 = 0, i64toi32_i32$1 = 0, $13 = 0, $14 = 0, $15 = 0, $35 = 0, $36 = 0, $37 = 0, $94 = 0, $105 = 0, $150 = 0, $161 = 0, $20 = 0, $20$hi = 0, $229 = 0, $284 = 0, $295 = 0, $551 = 0, $734 = 0, $842 = 0, $844 = 0;
  $7 = __stack_pointer - 560 | 0;
  __stack_pointer = $7;
  $8 = -12;
  $9 = $4;
  $10 = $5;
  $11 = $6;
  $12 = 0;
  $13 = 0;
  $14 = 0;
  $15 = 0;
  label$1 : while (1) {
   $16 = $11;
   label$2 : {
    if (($13 | 0) < ($12 | 0)) {
     break label$2
    }
    $15 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    $12 = ((Math_imul($12, 3) | 0) / (2 | 0) | 0) + 32 | 0;
    $11 = Math_imul($12, 12);
    HEAP32[(0 + 1104 | 0) >> 2] = $15 + $11 | 0;
    label$3 : {
     if (!$14) {
      break label$3
     }
     wasm2js_memory_copy($15, $14, $11);
    }
    $14 = $15;
   }
   $11 = $15 + $8 | 0;
   HEAP32[($11 + 20 | 0) >> 2] = $16;
   HEAP32[($11 + 16 | 0) >> 2] = $10;
   HEAP32[($11 + 12 | 0) >> 2] = $9;
   $11 = ($16 << 1 | 0) & 14 | 0 | (($16 >>> 3 | 0) & 1 | 0) | 0;
   $17 = (($10 + $1 | 0) + (($11 | 0) == (8 | 0) ? 1 : ($11 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
   $18 = (($9 + $0 | 0) + (($11 | 0) == (1 | 0) ? 1 : ($11 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
   label$4 : {
    label$5 : {
     if ($3) {
      break label$5
     }
     $19 = $18 - $9 | 0;
     $94 = $19;
     $19 = $19 >> 31 | 0;
     if ((($94 ^ $19 | 0) - $19 | 0) >>> 0 > 1 >>> 0) {
      break label$4
     }
     $19 = $17 - $10 | 0;
     $105 = $19;
     $19 = $19 >> 31 | 0;
     if ((($105 ^ $19 | 0) - $19 | 0) >>> 0 > 1 >>> 0) {
      break label$4
     }
    }
    if ((HEAPU8[($2 + (Math_imul($17, $0) + $18 | 0) | 0) >> 0] | 0) & 16 | 0) {
     break label$4
    }
    $10 = (((($16 | 0) == (8 | 0) ? 1 : ($16 | 0) == (2 | 0) ? -1 : 0) + $1 | 0) + $17 | 0 | 0) % ($1 | 0) | 0;
    $9 = (((($16 | 0) == (1 | 0) ? 1 : ($16 | 0) == (4 | 0) ? -1 : 0) + $0 | 0) + $18 | 0 | 0) % ($0 | 0) | 0;
    label$6 : {
     label$7 : {
      if ($3) {
       break label$7
      }
      $11 = $9 - $18 | 0;
      $150 = $11;
      $11 = $11 >> 31 | 0;
      if ((($150 ^ $11 | 0) - $11 | 0) >>> 0 > 1 >>> 0) {
       break label$6
      }
      $11 = $10 - $17 | 0;
      $161 = $11;
      $11 = $11 >> 31 | 0;
      if ((($161 ^ $11 | 0) - $11 | 0) >>> 0 > 1 >>> 0) {
       break label$6
      }
     }
     if ((HEAPU8[($2 + (Math_imul($10, $0) + $9 | 0) | 0) >> 0] | 0) & 16 | 0) {
      break label$6
     }
     $11 = ($16 >>> 1 | 0) & 7 | 0 | (($16 << 3 | 0) & 8 | 0) | 0;
     break label$4;
    }
    $9 = $18;
    $10 = $17;
    $11 = $16;
   }
   $13 = $13 + 1 | 0;
   $8 = $8 + 12 | 0;
   if (($9 | 0) != ($4 | 0)) {
    continue label$1
   }
   if (($10 | 0) != ($5 | 0)) {
    continue label$1
   }
   if (($11 | 0) != ($6 | 0)) {
    continue label$1
   }
   break label$1;
  };
  $11 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  $16 = $11 + $8 | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $16 + 12 | 0;
  wasm2js_memory_copy($11, $14, $8 + 12 | 0);
  label$8 : {
   if (($13 | 0) == (1 | 0)) {
    break label$8
   }
   $9 = $13;
   label$9 : while (1) {
    label$10 : {
     $10 = $9 + -1 | 0;
     $9 = undefined_weak_JS_random_upto($9 | 0) | 0;
     if (($10 | 0) == ($9 | 0)) {
      break label$10
     }
     i64toi32_i32$0 = HEAPU8[$16 >> 0] | 0 | ((HEAPU8[($16 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($16 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($16 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$1 = HEAPU8[($16 + 4 | 0) >> 0] | 0 | ((HEAPU8[($16 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($16 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($16 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $20 = i64toi32_i32$0;
     $20$hi = i64toi32_i32$1;
     $9 = $11 + Math_imul($9, 12) | 0;
     i64toi32_i32$1 = HEAPU8[$9 >> 0] | 0 | ((HEAPU8[($9 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($9 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($9 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     i64toi32_i32$0 = HEAPU8[($9 + 4 | 0) >> 0] | 0 | ((HEAPU8[($9 + 5 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($9 + 6 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($9 + 7 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $229 = i64toi32_i32$1;
     i64toi32_i32$1 = $16;
     $35 = $229;
     HEAP8[$16 >> 0] = $35;
     HEAP8[($16 + 1 | 0) >> 0] = $35 >>> 8 | 0;
     HEAP8[($16 + 2 | 0) >> 0] = $35 >>> 16 | 0;
     HEAP8[($16 + 3 | 0) >> 0] = $35 >>> 24 | 0;
     HEAP8[($16 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[($16 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[($16 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[($16 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     $8 = $16 + 8 | 0;
     $18 = HEAPU8[$8 >> 0] | 0 | ((HEAPU8[($8 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($8 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($8 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     $17 = $9 + 8 | 0;
     $36 = HEAPU8[$17 >> 0] | 0 | ((HEAPU8[($17 + 1 | 0) >> 0] | 0) << 8 | 0) | 0 | ((HEAPU8[($17 + 2 | 0) >> 0] | 0) << 16 | 0 | ((HEAPU8[($17 + 3 | 0) >> 0] | 0) << 24 | 0) | 0) | 0;
     HEAP8[$8 >> 0] = $36;
     HEAP8[($8 + 1 | 0) >> 0] = $36 >>> 8 | 0;
     HEAP8[($8 + 2 | 0) >> 0] = $36 >>> 16 | 0;
     HEAP8[($8 + 3 | 0) >> 0] = $36 >>> 24 | 0;
     i64toi32_i32$0 = $20$hi;
     i64toi32_i32$1 = $9;
     $37 = $20;
     HEAP8[$9 >> 0] = $37;
     HEAP8[($9 + 1 | 0) >> 0] = $37 >>> 8 | 0;
     HEAP8[($9 + 2 | 0) >> 0] = $37 >>> 16 | 0;
     HEAP8[($9 + 3 | 0) >> 0] = $37 >>> 24 | 0;
     HEAP8[($9 + 4 | 0) >> 0] = i64toi32_i32$0;
     HEAP8[($9 + 5 | 0) >> 0] = i64toi32_i32$0 >>> 8 | 0;
     HEAP8[($9 + 6 | 0) >> 0] = i64toi32_i32$0 >>> 16 | 0;
     HEAP8[($9 + 7 | 0) >> 0] = i64toi32_i32$0 >>> 24 | 0;
     HEAP8[$17 >> 0] = $18;
     HEAP8[($17 + 1 | 0) >> 0] = $18 >>> 8 | 0;
     HEAP8[($17 + 2 | 0) >> 0] = $18 >>> 16 | 0;
     HEAP8[($17 + 3 | 0) >> 0] = $18 >>> 24 | 0;
    }
    $16 = $16 + -12 | 0;
    $9 = $10;
    if (($9 | 0) > (1 | 0)) {
     continue label$9
    }
    break label$9;
   };
  }
  label$11 : {
   label$12 : {
    label$13 : {
     if ($3) {
      break label$13
     }
     $10 = 0;
     label$14 : while (1) {
      $8 = HEAP32[($11 + 4 | 0) >> 2] | 0;
      $16 = HEAP32[($11 + 8 | 0) >> 2] | 0;
      $17 = (($8 + $1 | 0) + (($16 | 0) == (8 | 0) ? 1 : ($16 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
      label$15 : {
       $9 = HEAP32[$11 >> 2] | 0;
       $3 = (($9 + $0 | 0) + (($16 | 0) == (1 | 0) ? 1 : ($16 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
       $18 = $3 - $9 | 0;
       $284 = $18;
       $18 = $18 >> 31 | 0;
       if ((($284 ^ $18 | 0) - $18 | 0) >>> 0 > 1 >>> 0) {
        break label$15
       }
       $18 = $17 - $8 | 0;
       $295 = $18;
       $18 = $18 >> 31 | 0;
       if ((($295 ^ $18 | 0) - $18 | 0) >>> 0 > 1 >>> 0) {
        break label$15
       }
       $12 = $2 + (Math_imul($8, $0) + $9 | 0) | 0;
       $18 = HEAPU8[$12 >> 0] | 0;
       if ($16 & $18 | 0) {
        break label$15
       }
       $18 = $16 | $18 | 0;
       if (($18 & 15 | 0 | 0) == (15 | 0)) {
        break label$15
       }
       $4 = ($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0;
       $17 = $2 + (Math_imul($17, $0) + $3 | 0) | 0;
       if (($4 | ((HEAPU8[$17 >> 0] | 0) & 15 | 0) | 0 | 0) != (15 | 0)) {
        break label$12
       }
      }
      $11 = $11 + 12 | 0;
      $10 = $10 + 1 | 0;
      if (($13 | 0) != ($10 | 0)) {
       continue label$14
      }
      break label$11;
     };
    }
    $10 = 0;
    label$16 : while (1) {
     $8 = HEAP32[($11 + 4 | 0) >> 2] | 0;
     $16 = HEAP32[($11 + 8 | 0) >> 2] | 0;
     $17 = (($8 + $1 | 0) + (($16 | 0) == (8 | 0) ? 1 : ($16 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
     $9 = HEAP32[$11 >> 2] | 0;
     $3 = (($9 + $0 | 0) + (($16 | 0) == (1 | 0) ? 1 : ($16 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
     label$17 : {
      $12 = $2 + (Math_imul($8, $0) + $9 | 0) | 0;
      $18 = HEAPU8[$12 >> 0] | 0;
      if ($16 & $18 | 0) {
       break label$17
      }
      $18 = $16 | $18 | 0;
      if (($18 & 15 | 0 | 0) == (15 | 0)) {
       break label$17
      }
      $4 = ($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0;
      $17 = $2 + (Math_imul($17, $0) + $3 | 0) | 0;
      if (($4 | ((HEAPU8[$17 >> 0] | 0) & 15 | 0) | 0 | 0) != (15 | 0)) {
       break label$12
      }
     }
     $11 = $11 + 12 | 0;
     $10 = $10 + 1 | 0;
     if (($13 | 0) != ($10 | 0)) {
      continue label$16
     }
     break label$11;
    };
   }
   HEAP8[$12 >> 0] = $18;
   HEAP8[$17 >> 0] = HEAPU8[$17 >> 0] | 0 | $4 | 0;
   if (($10 | 0) == ($13 | 0)) {
    break label$11
   }
   $19 = $7 + 36 | 0;
   HEAP32[$19 >> 2] = $16;
   $5 = $7 + 32 | 0;
   HEAP32[$5 >> 2] = $8;
   i64toi32_i32$1 = $7;
   i64toi32_i32$0 = 0;
   HEAP32[$7 >> 2] = 0;
   HEAP32[($7 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $7;
   i64toi32_i32$0 = 0;
   HEAP32[($7 + 8 | 0) >> 2] = 0;
   HEAP32[($7 + 12 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$1 = $7;
   i64toi32_i32$0 = 0;
   HEAP32[($7 + 40 | 0) >> 2] = 0;
   HEAP32[($7 + 44 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($7 + 28 | 0) >> 2] = $9;
   HEAP32[($7 + 24 | 0) >> 2] = $16;
   HEAP32[($7 + 20 | 0) >> 2] = $8;
   HEAP32[($7 + 16 | 0) >> 2] = $9;
   label$18 : while (1) {
    $3 = HEAP32[($7 + 20 | 0) >> 2] | 0;
    $16 = HEAP32[($7 + 24 | 0) >> 2] | 0;
    $8 = (($3 + $1 | 0) + (($16 | 0) == (8 | 0) ? 1 : ($16 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
    $12 = HEAP32[($7 + 16 | 0) >> 2] | 0;
    $9 = (($12 + $0 | 0) + (($16 | 0) == (1 | 0) ? 1 : ($16 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
    label$19 : {
     label$20 : {
      $10 = HEAP32[($7 + 8 | 0) >> 2] | 0;
      if (($10 | 0) < (1 | 0)) {
       break label$20
      }
      $11 = HEAP32[($7 + 40 | 0) >> 2] | 0;
      $17 = $10 + -1 | 0;
      $18 = $11 + Math_imul($17, 12) | 0;
      if ((HEAP32[$18 >> 2] | 0 | 0) != ($9 | 0)) {
       break label$20
      }
      if ((HEAP32[($18 + 4 | 0) >> 2] | 0 | 0) != ($8 | 0)) {
       break label$20
      }
      $18 = HEAP32[($18 + 8 | 0) >> 2] | 0;
      if (($18 | 0) != (($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0 | 0)) {
       break label$20
      }
      HEAP32[($7 + 8 | 0) >> 2] = $17;
      break label$19;
     }
     label$21 : {
      label$22 : {
       $11 = HEAP32[$7 >> 2] | 0;
       if (($10 | 0) >= ($11 | 0)) {
        break label$22
       }
       $11 = HEAP32[($7 + 40 | 0) >> 2] | 0;
       break label$21;
      }
      $18 = ((Math_imul($11, 3) | 0) / (2 | 0) | 0) + 32 | 0;
      HEAP32[$7 >> 2] = $18;
      $11 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
      $18 = Math_imul($18, 12);
      HEAP32[(0 + 1104 | 0) >> 2] = $11 + $18 | 0;
      label$23 : {
       $17 = HEAP32[($7 + 40 | 0) >> 2] | 0;
       if (!$17) {
        break label$23
       }
       wasm2js_memory_copy($11, $17, $18);
      }
      HEAP32[($7 + 40 | 0) >> 2] = $11;
     }
     $18 = $11 + Math_imul($10, 12) | 0;
     i64toi32_i32$0 = HEAP32[($7 + 16 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($7 + 20 | 0) >> 2] | 0;
     $551 = i64toi32_i32$0;
     i64toi32_i32$0 = $18;
     HEAP32[$18 >> 2] = $551;
     HEAP32[($18 + 4 | 0) >> 2] = i64toi32_i32$1;
     HEAP32[($18 + 8 | 0) >> 2] = HEAP32[($7 + 24 | 0) >> 2] | 0;
     $17 = $10 + 1 | 0;
     HEAP32[($7 + 8 | 0) >> 2] = $17;
     $18 = ($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0;
    }
    label$24 : {
     label$25 : {
      $10 = ($18 << 1 | 0) & 14 | 0 | (($18 >>> 3 | 0) & 1 | 0) | 0;
      $4 = HEAPU8[($2 + (Math_imul($8, $0) + $9 | 0) | 0) >> 0] | 0;
      if ($10 & $4 | 0) {
       break label$25
      }
      $10 = ($10 << 1 | 0) & 14 | 0 | (($18 >>> 2 | 0) & 1 | 0) | 0;
      if ($10 & $4 | 0) {
       break label$25
      }
      $10 = ($10 << 1 | 0) & 14 | 0 | (($18 >>> 1 | 0) & 1 | 0) | 0;
      if ($10 & $4 | 0) {
       break label$25
      }
      $10 = ($10 << 1 | 0) & 14 | 0 | ($18 & 1 | 0) | 0;
      if (!($10 & $4 | 0)) {
       break label$24
      }
     }
     HEAP32[($7 + 24 | 0) >> 2] = $10;
     HEAP32[($7 + 20 | 0) >> 2] = $8;
     HEAP32[($7 + 16 | 0) >> 2] = $9;
     $16 = $10;
     $3 = $8;
     $12 = $9;
    }
    label$26 : {
     label$27 : {
      if (($12 | 0) != (HEAP32[$11 >> 2] | 0 | 0)) {
       break label$27
      }
      if (($3 | 0) != (HEAP32[($11 + 4 | 0) >> 2] | 0 | 0)) {
       break label$27
      }
      if (($16 | 0) == (HEAP32[($11 + 8 | 0) >> 2] | 0 | 0)) {
       break label$26
      }
     }
     $3 = HEAP32[$5 >> 2] | 0;
     $16 = HEAP32[$19 >> 2] | 0;
     $8 = (($3 + $1 | 0) + (($16 | 0) == (8 | 0) ? 1 : ($16 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
     $12 = HEAP32[($7 + 28 | 0) >> 2] | 0;
     $9 = (($12 + $0 | 0) + (($16 | 0) == (1 | 0) ? 1 : ($16 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
     label$28 : {
      label$29 : {
       label$30 : {
        $10 = HEAP32[($7 + 12 | 0) >> 2] | 0;
        if (($10 | 0) < (1 | 0)) {
         break label$30
        }
        $11 = HEAP32[($7 + 44 | 0) >> 2] | 0;
        $17 = $10 + -1 | 0;
        $18 = $11 + Math_imul($17, 12) | 0;
        if ((HEAP32[$18 >> 2] | 0 | 0) != ($9 | 0)) {
         break label$30
        }
        if ((HEAP32[($18 + 4 | 0) >> 2] | 0 | 0) != ($8 | 0)) {
         break label$30
        }
        $18 = HEAP32[($18 + 8 | 0) >> 2] | 0;
        if (($18 | 0) == (($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0 | 0)) {
         break label$29
        }
       }
       $18 = $7 + 16 | 0 | 12 | 0;
       label$31 : {
        label$32 : {
         $11 = HEAP32[($7 + 4 | 0) >> 2] | 0;
         if (($10 | 0) < ($11 | 0)) {
          break label$32
         }
         $17 = ((Math_imul($11, 3) | 0) / (2 | 0) | 0) + 32 | 0;
         HEAP32[($7 + 4 | 0) >> 2] = $17;
         $11 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
         $17 = Math_imul($17, 12);
         HEAP32[(0 + 1104 | 0) >> 2] = $11 + $17 | 0;
         label$33 : {
          $4 = HEAP32[($7 + 44 | 0) >> 2] | 0;
          if (!$4) {
           break label$33
          }
          wasm2js_memory_copy($11, $4, $17);
         }
         HEAP32[($7 + 44 | 0) >> 2] = $11;
         break label$31;
        }
        $11 = HEAP32[($7 + 44 | 0) >> 2] | 0;
       }
       $17 = $11 + Math_imul($10, 12) | 0;
       i64toi32_i32$1 = HEAP32[$18 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[($18 + 4 | 0) >> 2] | 0;
       $734 = i64toi32_i32$1;
       i64toi32_i32$1 = $17;
       HEAP32[$17 >> 2] = $734;
       HEAP32[($17 + 4 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[($17 + 8 | 0) >> 2] = HEAP32[($18 + 8 | 0) >> 2] | 0;
       $17 = $10 + 1 | 0;
       HEAP32[($7 + 12 | 0) >> 2] = $17;
       $18 = ($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0;
       break label$28;
      }
      HEAP32[($7 + 12 | 0) >> 2] = $17;
     }
     label$34 : {
      label$35 : {
       $4 = ($18 >>> 1 | 0) & 7 | 0;
       $10 = $4 | (($18 << 3 | 0) & 8 | 0) | 0;
       $18 = HEAPU8[($2 + (Math_imul($8, $0) + $9 | 0) | 0) >> 0] | 0;
       if ($10 & $18 | 0) {
        break label$35
       }
       $6 = $10 >>> 1 | 0;
       $10 = $6 | (($4 << 3 | 0) & 8 | 0) | 0;
       if ($10 & $18 | 0) {
        break label$35
       }
       $4 = $10 >>> 1 | 0;
       $10 = $4 | (($6 << 3 | 0) & 8 | 0) | 0;
       if ($10 & $18 | 0) {
        break label$35
       }
       $10 = ($10 >>> 1 | 0 | ($4 << 3 | 0) | 0) & 15 | 0;
       if (!($10 & $18 | 0)) {
        break label$34
       }
      }
      HEAP32[($7 + 36 | 0) >> 2] = $10;
      HEAP32[($7 + 32 | 0) >> 2] = $8;
      HEAP32[($7 + 28 | 0) >> 2] = $9;
      $16 = $10;
      $3 = $8;
      $12 = $9;
     }
     if (($12 | 0) != (HEAP32[$11 >> 2] | 0 | 0)) {
      continue label$18
     }
     if (($3 | 0) != (HEAP32[($11 + 4 | 0) >> 2] | 0 | 0)) {
      continue label$18
     }
     if (($16 | 0) != (HEAP32[($11 + 8 | 0) >> 2] | 0 | 0)) {
      continue label$18
     }
    }
    break label$18;
   };
   $11 = Math_imul(undefined_weak_JS_random_upto($17 + -1 | 0 | 0) | 0, 12) + $11 | 0;
   $9 = HEAP32[($11 + 16 | 0) >> 2] | 0;
   $10 = HEAP32[($11 + 12 | 0) >> 2] | 0;
   $16 = $2 + (Math_imul($9, $0) + $10 | 0) | 0;
   $842 = $16;
   $844 = HEAPU8[$16 >> 0] | 0;
   $16 = HEAP32[($11 + 20 | 0) >> 2] | 0;
   HEAP8[$842 >> 0] = $844 & ($16 ^ -1 | 0) | 0;
   $11 = 0;
   $9 = $2 + (Math_imul((($9 + $1 | 0) + (($16 | 0) == (8 | 0) ? 1 : ($16 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0, $0) + ((($10 + $0 | 0) + (($16 | 0) == (1 | 0) ? 1 : ($16 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0) | 0) | 0;
   HEAP8[$9 >> 0] = (HEAPU8[$9 >> 0] | 0) & ((($16 >>> 2 | 0) & 3 | 0 | (($16 << 2 | 0) & 12 | 0) | 0) ^ -1 | 0) | 0;
   qsort($14 | 0, $13 | 0, 12 | 0, 2 | 0, 0 | 0);
   $12 = $0 << 2 | 0;
   $16 = -1;
   $8 = -1;
   label$36 : while (1) {
    label$37 : {
     label$38 : {
      $14 = $11;
      $3 = ($13 | 0) == ($11 | 0);
      if ($3) {
       break label$38
      }
      $9 = HEAP32[($15 + Math_imul($14, 12) | 0) >> 2] | 0;
      if (($9 | 0) <= ($8 | 0)) {
       break label$37
      }
     }
     label$39 : {
      if (($8 | 0) == (-1 | 0)) {
       break label$39
      }
      if (($16 | 0) >= ($1 | 0)) {
       break label$39
      }
      $10 = ($16 ^ -1 | 0) + $1 | 0;
      label$40 : {
       $9 = ($1 - $16 | 0) & 3 | 0;
       if (!$9) {
        break label$40
       }
       $11 = $2 + ($8 + Math_imul($0, $16) | 0) | 0;
       label$41 : while (1) {
        HEAP8[$11 >> 0] = HEAPU8[$11 >> 0] | 0 | 16 | 0;
        $11 = $11 + $0 | 0;
        $16 = $16 + 1 | 0;
        $9 = $9 + -1 | 0;
        if ($9) {
         continue label$41
        }
        break label$41;
       };
      }
      if ($10 >>> 0 < 3 >>> 0) {
       break label$39
      }
      $10 = Math_imul($0, $16);
      $11 = $2 + $8 | 0;
      $9 = $1 - $16 | 0;
      $8 = Math_imul($0, $16 + 1 | 0);
      $18 = Math_imul($0, $16 + 2 | 0);
      $17 = Math_imul($0, $16 + 3 | 0);
      label$42 : while (1) {
       $16 = $11 + $10 | 0;
       HEAP8[$16 >> 0] = HEAPU8[$16 >> 0] | 0 | 16 | 0;
       $16 = $11 + $8 | 0;
       HEAP8[$16 >> 0] = HEAPU8[$16 >> 0] | 0 | 16 | 0;
       $16 = $11 + $18 | 0;
       HEAP8[$16 >> 0] = HEAPU8[$16 >> 0] | 0 | 16 | 0;
       $16 = $11 + $17 | 0;
       HEAP8[$16 >> 0] = HEAPU8[$16 >> 0] | 0 | 16 | 0;
       $11 = $11 + $12 | 0;
       $9 = $9 + -4 | 0;
       if ($9) {
        continue label$42
       }
       break label$42;
      };
     }
     if ($3) {
      break label$11
     }
     $16 = 0;
     $9 = HEAP32[($15 + Math_imul($14, 12) | 0) >> 2] | 0;
     $8 = $9;
    }
    label$43 : {
     label$44 : {
      label$45 : {
       $11 = $15 + Math_imul($14, 12) | 0;
       switch ((HEAP32[($11 + 8 | 0) >> 2] | 0) + -2 | 0 | 0) {
       case 0:
        break label$44;
       case 6:
        break label$45;
       default:
        break label$43;
       };
      }
      label$46 : {
       if (($16 | 0) > (HEAP32[($11 + 4 | 0) >> 2] | 0 | 0)) {
        break label$46
       }
       $10 = $11 + 4 | 0;
       $9 = $16 + -1 | 0;
       $11 = $2 + ($8 + Math_imul($0, $16) | 0) | 0;
       label$47 : while (1) {
        HEAP8[$11 >> 0] = HEAPU8[$11 >> 0] | 0 | 16 | 0;
        $11 = $11 + $0 | 0;
        $9 = $9 + 1 | 0;
        if (($9 | 0) < (HEAP32[$10 >> 2] | 0 | 0)) {
         continue label$47
        }
        break label$47;
       };
      }
      $8 = -1;
      $16 = -1;
      break label$43;
     }
     $16 = HEAP32[($11 + 4 | 0) >> 2] | 0;
     $8 = $9;
    }
    $11 = $14 + 1 | 0;
    if (($13 | 0) != ($14 | 0)) {
     continue label$36
    }
    break label$36;
   };
  }
  __stack_pointer = $7 + 560 | 0;
 }
 
 function add234_insert($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $11 = 0, $9 = 0, $8 = 0, i64toi32_i32$0 = 0, $6 = 0, $7 = 0, i64toi32_i32$1 = 0, $13 = 0, i64toi32_i32$2 = 0, $10 = 0, $12 = 0, $99 = 0, $238 = 0, $275 = 0;
  $6 = 0;
  $7 = 0;
  label$1 : {
   if (!$0) {
    break label$1
   }
   $7 = ((((((HEAP32[($0 + 24 | 0) >> 2] | 0) + (HEAP32[($0 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($0 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
  }
  label$2 : {
   if (!$2) {
    break label$2
   }
   $6 = ((((((HEAP32[($2 + 24 | 0) >> 2] | 0) + (HEAP32[($2 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($2 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($2 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($2 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($2 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($2 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
  }
  label$3 : {
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       if ($4) {
        break label$7
       }
       $4 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       break label$6;
      }
      $8 = $4 + 36 | 0;
      label$8 : {
       $9 = $4 + 40 | 0;
       $10 = HEAP32[$9 >> 2] | 0;
       if ($10) {
        break label$8
       }
       $11 = $2;
       break label$5;
      }
      $12 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
      label$9 : while (1) {
       $13 = $0;
       $0 = $12;
       label$10 : {
        $11 = $4;
        if (HEAP32[($11 + 44 | 0) >> 2] | 0) {
         break label$10
        }
        label$11 : {
         label$12 : {
          switch ($5 | 0) {
          case 0:
           HEAP32[($11 + 44 | 0) >> 2] = $10;
           $4 = $11 + 8 | 0;
           i64toi32_i32$2 = $4;
           i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
           $99 = i64toi32_i32$0;
           i64toi32_i32$0 = $11 + 12 | 0;
           HEAP32[i64toi32_i32$0 >> 2] = $99;
           HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
           HEAP32[$9 >> 2] = HEAP32[$8 >> 2] | 0;
           HEAP32[$4 >> 2] = $2;
           HEAP32[$8 >> 2] = $1;
           $4 = $11 + 28 | 0;
           $0 = HEAP32[$4 >> 2] | 0;
           $9 = $11 + 24 | 0;
           $2 = HEAP32[$9 >> 2] | 0;
           HEAP32[$4 >> 2] = $2;
           HEAP32[($11 + 32 | 0) >> 2] = $0;
           HEAP32[$9 >> 2] = $6;
           HEAP32[($11 + 4 | 0) >> 2] = $13;
           $4 = $11 + 20 | 0;
           break label$11;
          case 1:
           HEAP32[($11 + 44 | 0) >> 2] = $10;
           $4 = $11 + 12 | 0;
           HEAP32[($11 + 16 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
           HEAP32[$4 >> 2] = $2;
           HEAP32[$9 >> 2] = $1;
           $4 = $11 + 28 | 0;
           $0 = HEAP32[$4 >> 2] | 0;
           HEAP32[$4 >> 2] = $6;
           HEAP32[($11 + 32 | 0) >> 2] = $0;
           HEAP32[($11 + 8 | 0) >> 2] = $13;
           $4 = $11 + 24 | 0;
           $2 = $6;
           break label$11;
          default:
           break label$12;
          };
         }
         HEAP32[($11 + 44 | 0) >> 2] = $1;
         HEAP32[($11 + 32 | 0) >> 2] = $6;
         HEAP32[($11 + 16 | 0) >> 2] = $2;
         HEAP32[($11 + 12 | 0) >> 2] = $13;
         $4 = $11 + 28 | 0;
         $2 = $7;
        }
        HEAP32[$4 >> 2] = $7;
        label$15 : {
         $4 = HEAP32[($11 + 4 | 0) >> 2] | 0;
         if (!$4) {
          break label$15
         }
         HEAP32[$4 >> 2] = $11;
        }
        label$16 : {
         $4 = HEAP32[($11 + 8 | 0) >> 2] | 0;
         if (!$4) {
          break label$16
         }
         HEAP32[$4 >> 2] = $11;
        }
        label$17 : {
         $4 = HEAP32[($11 + 12 | 0) >> 2] | 0;
         if (!$4) {
          break label$17
         }
         HEAP32[$4 >> 2] = $11;
        }
        label$18 : {
         $4 = HEAP32[($11 + 16 | 0) >> 2] | 0;
         if (!$4) {
          break label$18
         }
         HEAP32[$4 >> 2] = $11;
        }
        $4 = $11;
        break label$4;
       }
       $12 = $0 + 48 | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $12;
       HEAP32[$0 >> 2] = HEAP32[$11 >> 2] | 0;
       label$19 : {
        label$20 : {
         switch ($5 | 0) {
         case 0:
          HEAP32[($0 + 36 | 0) >> 2] = $1;
          HEAP32[($0 + 4 | 0) >> 2] = $13;
          HEAP32[($0 + 8 | 0) >> 2] = $2;
          HEAP32[($0 + 40 | 0) >> 2] = HEAP32[$8 >> 2] | 0;
          $4 = $11 + 8 | 0;
          HEAP32[($0 + 12 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
          HEAP32[($0 + 20 | 0) >> 2] = $7;
          HEAP32[($0 + 24 | 0) >> 2] = $6;
          $1 = HEAP32[$9 >> 2] | 0;
          HEAP32[($11 + 4 | 0) >> 2] = HEAP32[($11 + 12 | 0) >> 2] | 0;
          HEAP32[($0 + 28 | 0) >> 2] = HEAP32[($11 + 24 | 0) >> 2] | 0;
          HEAP32[$8 >> 2] = HEAP32[($11 + 44 | 0) >> 2] | 0;
          i64toi32_i32$2 = $11 + 28 | 0;
          i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $238 = i64toi32_i32$1;
          i64toi32_i32$1 = $11;
          HEAP32[($11 + 20 | 0) >> 2] = $238;
          HEAP32[($11 + 24 | 0) >> 2] = i64toi32_i32$0;
          HEAP32[$4 >> 2] = HEAP32[($11 + 16 | 0) >> 2] | 0;
          break label$19;
         case 1:
          HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($11 + 4 | 0) >> 2] | 0;
          $4 = HEAP32[$8 >> 2] | 0;
          HEAP32[($0 + 40 | 0) >> 2] = $1;
          HEAP32[($0 + 8 | 0) >> 2] = $13;
          HEAP32[($0 + 36 | 0) >> 2] = $4;
          HEAP32[($0 + 12 | 0) >> 2] = $2;
          $1 = HEAP32[$9 >> 2] | 0;
          HEAP32[($11 + 4 | 0) >> 2] = HEAP32[($11 + 12 | 0) >> 2] | 0;
          HEAP32[($0 + 20 | 0) >> 2] = HEAP32[($11 + 20 | 0) >> 2] | 0;
          HEAP32[($0 + 28 | 0) >> 2] = $6;
          HEAP32[($0 + 24 | 0) >> 2] = $7;
          HEAP32[$8 >> 2] = HEAP32[($11 + 44 | 0) >> 2] | 0;
          i64toi32_i32$2 = $11 + 28 | 0;
          i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
          i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
          $275 = i64toi32_i32$0;
          i64toi32_i32$0 = $11;
          HEAP32[($11 + 20 | 0) >> 2] = $275;
          HEAP32[($11 + 24 | 0) >> 2] = i64toi32_i32$1;
          HEAP32[($11 + 8 | 0) >> 2] = HEAP32[($11 + 16 | 0) >> 2] | 0;
          break label$19;
         default:
          break label$20;
         };
        }
        HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($11 + 4 | 0) >> 2] | 0;
        HEAP32[($0 + 36 | 0) >> 2] = HEAP32[$8 >> 2] | 0;
        HEAP32[($0 + 20 | 0) >> 2] = HEAP32[($11 + 20 | 0) >> 2] | 0;
        HEAP32[($0 + 8 | 0) >> 2] = HEAP32[($11 + 8 | 0) >> 2] | 0;
        HEAP32[($0 + 24 | 0) >> 2] = HEAP32[($11 + 24 | 0) >> 2] | 0;
        HEAP32[($0 + 40 | 0) >> 2] = HEAP32[$9 >> 2] | 0;
        label$23 : {
         if (($5 | 0) != (2 | 0)) {
          break label$23
         }
         HEAP32[($0 + 12 | 0) >> 2] = $13;
         HEAP32[($11 + 4 | 0) >> 2] = $2;
         HEAP32[($0 + 28 | 0) >> 2] = $7;
         HEAP32[$8 >> 2] = HEAP32[($11 + 44 | 0) >> 2] | 0;
         HEAP32[($11 + 20 | 0) >> 2] = $6;
         HEAP32[($11 + 24 | 0) >> 2] = HEAP32[($11 + 32 | 0) >> 2] | 0;
         HEAP32[($11 + 8 | 0) >> 2] = HEAP32[($11 + 16 | 0) >> 2] | 0;
         break label$19;
        }
        HEAP32[($0 + 12 | 0) >> 2] = HEAP32[($11 + 12 | 0) >> 2] | 0;
        HEAP32[($11 + 4 | 0) >> 2] = $13;
        HEAP32[($0 + 28 | 0) >> 2] = HEAP32[($11 + 28 | 0) >> 2] | 0;
        HEAP32[$8 >> 2] = $1;
        HEAP32[($11 + 20 | 0) >> 2] = $7;
        HEAP32[($11 + 24 | 0) >> 2] = $6;
        HEAP32[($11 + 8 | 0) >> 2] = $2;
        $1 = HEAP32[($11 + 44 | 0) >> 2] | 0;
       }
       i64toi32_i32$0 = $11 + 12 | 0;
       i64toi32_i32$1 = 0;
       HEAP32[i64toi32_i32$0 >> 2] = 0;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       HEAP32[($0 + 16 | 0) >> 2] = 0;
       HEAP32[$9 >> 2] = 0;
       i64toi32_i32$0 = $11 + 28 | 0;
       i64toi32_i32$1 = 0;
       HEAP32[i64toi32_i32$0 >> 2] = 0;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
       HEAP32[($11 + 44 | 0) >> 2] = 0;
       HEAP32[($0 + 32 | 0) >> 2] = 0;
       HEAP32[($0 + 44 | 0) >> 2] = 0;
       label$24 : {
        $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
        if (!$4) {
         break label$24
        }
        HEAP32[$4 >> 2] = $0;
       }
       label$25 : {
        $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
        if (!$4) {
         break label$25
        }
        HEAP32[$4 >> 2] = $0;
       }
       label$26 : {
        $4 = HEAP32[($0 + 12 | 0) >> 2] | 0;
        if (!$4) {
         break label$26
        }
        HEAP32[$4 >> 2] = $0;
       }
       label$27 : {
        $4 = HEAP32[($11 + 4 | 0) >> 2] | 0;
        if (!$4) {
         break label$27
        }
        HEAP32[$4 >> 2] = $11;
       }
       label$28 : {
        $4 = HEAP32[($11 + 8 | 0) >> 2] | 0;
        if (!$4) {
         break label$28
        }
        HEAP32[$4 >> 2] = $11;
       }
       $7 = (((((HEAP32[($0 + 24 | 0) >> 2] | 0) + (HEAP32[($0 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 28 | 0) >> 2] | 0) | 0) + ((HEAP32[($0 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
       $6 = ((((((HEAP32[($11 + 24 | 0) >> 2] | 0) + (HEAP32[($11 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($11 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($11 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($11 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[$9 >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($11 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
       label$29 : {
        $4 = HEAP32[$11 >> 2] | 0;
        if (!$4) {
         break label$29
        }
        label$30 : {
         label$31 : {
          if ((HEAP32[($4 + 4 | 0) >> 2] | 0 | 0) != ($11 | 0)) {
           break label$31
          }
          $5 = 0;
          break label$30;
         }
         label$32 : {
          if ((HEAP32[($4 + 8 | 0) >> 2] | 0 | 0) != ($11 | 0)) {
           break label$32
          }
          $5 = 1;
          break label$30;
         }
         $5 = (HEAP32[($4 + 12 | 0) >> 2] | 0 | 0) == ($11 | 0) ? 2 : 3;
        }
        $8 = $4 + 36 | 0;
        $2 = $11;
        $9 = $4 + 40 | 0;
        $10 = HEAP32[$9 >> 2] | 0;
        if (!$10) {
         break label$5
        }
        continue label$9;
       }
       break label$9;
      };
      $4 = $0 + 48 | 0;
      $2 = $11;
     }
     HEAP32[$3 >> 2] = $4;
     HEAP32[($4 + 4 | 0) >> 2] = $0;
     HEAP32[($4 + 36 | 0) >> 2] = $1;
     HEAP32[((HEAP32[$3 >> 2] | 0) + 8 | 0) >> 2] = $2;
     $11 = HEAP32[$3 >> 2] | 0;
     HEAP32[($11 + 40 | 0) >> 2] = 0;
     HEAP32[((HEAP32[$3 >> 2] | 0) + 12 | 0) >> 2] = 0;
     HEAP32[($4 + 20 | 0) >> 2] = $7;
     $0 = HEAP32[$3 >> 2] | 0;
     HEAP32[($0 + 44 | 0) >> 2] = 0;
     HEAP32[($11 + 24 | 0) >> 2] = $6;
     HEAP32[((HEAP32[$3 >> 2] | 0) + 16 | 0) >> 2] = 0;
     HEAP32[($0 + 28 | 0) >> 2] = 0;
     $11 = HEAP32[$3 >> 2] | 0;
     HEAP32[$11 >> 2] = 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $4 + 48 | 0;
     HEAP32[($11 + 32 | 0) >> 2] = 0;
     label$33 : {
      $4 = HEAP32[$3 >> 2] | 0;
      $11 = HEAP32[($4 + 4 | 0) >> 2] | 0;
      if (!$11) {
       break label$33
      }
      HEAP32[$11 >> 2] = $4;
      $4 = HEAP32[$3 >> 2] | 0;
     }
     $8 = 1;
     $11 = HEAP32[($4 + 8 | 0) >> 2] | 0;
     if (!$11) {
      break label$3
     }
     HEAP32[$11 >> 2] = $4;
     break label$3;
    }
    label$34 : {
     label$35 : {
      if ($5) {
       break label$35
      }
      $2 = $4 + 8 | 0;
      HEAP32[($4 + 12 | 0) >> 2] = HEAP32[$2 >> 2] | 0;
      HEAP32[$9 >> 2] = HEAP32[$8 >> 2] | 0;
      HEAP32[$2 >> 2] = $11;
      HEAP32[$8 >> 2] = $1;
      HEAP32[($4 + 20 | 0) >> 2] = $7;
      $9 = $4 + 24 | 0;
      $2 = HEAP32[$9 >> 2] | 0;
      HEAP32[$9 >> 2] = $6;
      HEAP32[($4 + 28 | 0) >> 2] = $2;
      HEAP32[($4 + 4 | 0) >> 2] = $0;
      break label$34;
     }
     HEAP32[($4 + 12 | 0) >> 2] = $11;
     HEAP32[$9 >> 2] = $1;
     HEAP32[($4 + 28 | 0) >> 2] = $6;
     HEAP32[($4 + 24 | 0) >> 2] = $7;
     HEAP32[($4 + 8 | 0) >> 2] = $0;
     $2 = $6;
     $11 = $0;
     $0 = HEAP32[($4 + 4 | 0) >> 2] | 0;
    }
    label$36 : {
     if (!$0) {
      break label$36
     }
     HEAP32[$0 >> 2] = $4;
     $11 = HEAP32[($4 + 8 | 0) >> 2] | 0;
    }
    label$37 : {
     if (!$11) {
      break label$37
     }
     HEAP32[$11 >> 2] = $4;
    }
    $11 = HEAP32[($4 + 12 | 0) >> 2] | 0;
    if (!$11) {
     break label$4
    }
    HEAP32[$11 >> 2] = $4;
   }
   label$38 : {
    $9 = HEAP32[$4 >> 2] | 0;
    if ($9) {
     break label$38
    }
    return 0 | 0;
   }
   label$39 : while (1) {
    $8 = 0;
    $2 = ((((((HEAP32[($4 + 24 | 0) >> 2] | 0) + (HEAP32[($4 + 20 | 0) >> 2] | 0) | 0) + $2 | 0) + (HEAP32[($4 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($4 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($4 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($4 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $0 = 0;
    label$40 : {
     $11 = $9;
     if ((HEAP32[($11 + 4 | 0) >> 2] | 0 | 0) == ($4 | 0)) {
      break label$40
     }
     label$41 : {
      if ((HEAP32[($11 + 8 | 0) >> 2] | 0 | 0) != ($4 | 0)) {
       break label$41
      }
      $0 = 1;
      break label$40;
     }
     $0 = (HEAP32[($11 + 12 | 0) >> 2] | 0 | 0) == ($4 | 0) ? 2 : 3;
    }
    HEAP32[(($11 + ($0 << 2 | 0) | 0) + 20 | 0) >> 2] = $2;
    $9 = HEAP32[$11 >> 2] | 0;
    if (!$9) {
     break label$3
    }
    $2 = HEAP32[($11 + 28 | 0) >> 2] | 0;
    $4 = $11;
    continue label$39;
   };
  }
  return $8 | 0;
 }
 
 function xyd_cmp($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   $3 = HEAP32[$1 >> 2] | 0;
   if (($2 | 0) >= ($3 | 0)) {
    break label$1
   }
   return -1 | 0;
  }
  $4 = 1;
  label$2 : {
   if (($2 | 0) > ($3 | 0)) {
    break label$2
   }
   label$3 : {
    $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (($2 | 0) >= ($3 | 0)) {
     break label$3
    }
    return -1 | 0;
   }
   if (($2 | 0) > ($3 | 0)) {
    break label$2
   }
   $4 = -1;
   $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
   if (($0 | 0) < ($1 | 0)) {
    break label$2
   }
   $4 = ($0 | 0) > ($1 | 0);
  }
  return $4 | 0;
 }
 
 function qsort($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $7 = 0, $8 = 0, $5 = 0, $6 = 0, $11 = 0, $13 = 0, $12 = 0, $16 = 0, $15 = 0, $19 = 0, $9 = 0, $17 = 0, $21 = 0, $10 = 0, $18 = 0, $20 = 0, $22 = 0, $14 = 0, $42 = 0;
  $5 = __stack_pointer - 688 | 0;
  __stack_pointer = $5;
  label$1 : {
   $6 = Math_imul($2, $1);
   if (!$6) {
    break label$1
   }
   HEAP32[$5 >> 2] = $2;
   HEAP32[($5 + 4 | 0) >> 2] = $2;
   $1 = $5 | 8 | 0;
   $7 = $2;
   $8 = $7;
   label$2 : while (1) {
    $42 = $8 + $2 | 0;
    $8 = $7;
    $7 = $42 + $7 | 0;
    HEAP32[$1 >> 2] = $7;
    $1 = $1 + 4 | 0;
    if ($7 >>> 0 < $6 >>> 0) {
     continue label$2
    }
    break label$2;
   };
   $9 = 0 - $2 | 0;
   label$3 : {
    label$4 : {
     $10 = ($0 + $6 | 0) - $2 | 0;
     if ($10 >>> 0 > $0 >>> 0) {
      break label$4
     }
     $11 = 0;
     $12 = 1;
     $13 = 1;
     break label$3;
    }
    $14 = $5 + 192 | 0 | 4 | 0;
    $13 = 1;
    $12 = 1;
    $11 = 0;
    label$5 : while (1) {
     label$6 : {
      label$7 : {
       if (($12 & 3 | 0 | 0) != (3 | 0)) {
        break label$7
       }
       HEAP32[($5 + 192 | 0) >> 2] = $0;
       label$8 : {
        if (($13 | 0) < (2 | 0)) {
         break label$8
        }
        $15 = 1;
        $6 = $14;
        $1 = $0;
        $7 = $13;
        label$9 : {
         label$10 : while (1) {
          label$11 : {
           $8 = $1 + $9 | 0;
           $16 = $7 + -2 | 0;
           $1 = $8 - (HEAP32[($5 + ($16 << 2 | 0) | 0) >> 2] | 0) | 0;
           if ((FUNCTION_TABLE[$3 | 0]($0, $1, $4) | 0 | 0) < (0 | 0)) {
            break label$11
           }
           if ((FUNCTION_TABLE[$3 | 0]($0, $8, $4) | 0 | 0) > (-1 | 0)) {
            break label$9
           }
          }
          label$12 : {
           label$13 : {
            if ((FUNCTION_TABLE[$3 | 0]($1, $8, $4) | 0 | 0) < (0 | 0)) {
             break label$13
            }
            HEAP32[$6 >> 2] = $1;
            $7 = $7 + -1 | 0;
            break label$12;
           }
           HEAP32[$6 >> 2] = $8;
           $7 = $16;
           $1 = $8;
          }
          $6 = $6 + 4 | 0;
          $15 = $15 + 1 | 0;
          if (($7 | 0) > (1 | 0)) {
           continue label$10
          }
          break label$10;
         };
        }
        if ($15 >>> 0 < 2 >>> 0) {
         break label$8
        }
        $17 = ($5 + 192 | 0) + ($15 << 2 | 0) | 0;
        HEAP32[$17 >> 2] = $5 + 432 | 0;
        if (!$2) {
         break label$8
        }
        $18 = $15 & -2 | 0;
        $7 = $5 + 432 | 0;
        $8 = $0;
        $19 = $2;
        label$14 : while (1) {
         $1 = $19 >>> 0 < 256 >>> 0 ? $19 : 256;
         wasm2js_memory_copy($7, $8, $1);
         $16 = 0;
         label$15 : {
          label$16 : {
           if (($15 | 0) == (1 | 0)) {
            break label$16
           }
           $20 = $15 & 1 | 0;
           $16 = 0;
           $7 = $5 + 192 | 0;
           label$17 : while (1) {
            $21 = $7 + 4 | 0;
            $6 = HEAP32[$21 >> 2] | 0;
            wasm2js_memory_copy($8, $6, $1);
            HEAP32[$7 >> 2] = $8 + $1 | 0;
            $7 = $7 + 8 | 0;
            $8 = HEAP32[$7 >> 2] | 0;
            wasm2js_memory_copy($6, $8, $1);
            HEAP32[$21 >> 2] = $6 + $1 | 0;
            $16 = $16 + 2 | 0;
            if (($18 | 0) != ($16 | 0)) {
             continue label$17
            }
            break label$17;
           };
           if (!$20) {
            break label$15
           }
          }
          $7 = ($5 + 192 | 0) + ($16 << 2 | 0) | 0;
          wasm2js_memory_copy($8, HEAP32[($7 + 4 | 0) >> 2] | 0, $1);
          HEAP32[$7 >> 2] = $8 + $1 | 0;
         }
         $19 = $19 - $1 | 0;
         if (!$19) {
          break label$8
         }
         $7 = HEAP32[$17 >> 2] | 0;
         $8 = HEAP32[($5 + 192 | 0) >> 2] | 0;
         continue label$14;
        };
       }
       $1 = $11 << 30 | 0 | ($12 >>> 2 | 0) | 0;
       $13 = $13 + 2 | 0;
       $11 = $11 >>> 2 | 0;
       break label$6;
      }
      label$18 : {
       label$19 : {
        $22 = $13 + -1 | 0;
        if ((HEAP32[($5 + ($22 << 2 | 0) | 0) >> 2] | 0) >>> 0 < ($10 - $0 | 0) >>> 0) {
         break label$19
        }
        trinkle($0 | 0, $2 | 0, $3 | 0, $4 | 0, $12 | 0, $11 | 0, $13 | 0, 0 | 0, $5 | 0);
        break label$18;
       }
       HEAP32[($5 + 192 | 0) >> 2] = $0;
       if (($13 | 0) < (2 | 0)) {
        break label$18
       }
       $15 = 1;
       $6 = $14;
       $1 = $0;
       $7 = $13;
       label$20 : {
        label$21 : while (1) {
         label$22 : {
          $8 = $1 + $9 | 0;
          $16 = $7 + -2 | 0;
          $1 = $8 - (HEAP32[($5 + ($16 << 2 | 0) | 0) >> 2] | 0) | 0;
          if ((FUNCTION_TABLE[$3 | 0]($0, $1, $4) | 0 | 0) < (0 | 0)) {
           break label$22
          }
          if ((FUNCTION_TABLE[$3 | 0]($0, $8, $4) | 0 | 0) > (-1 | 0)) {
           break label$20
          }
         }
         label$23 : {
          label$24 : {
           if ((FUNCTION_TABLE[$3 | 0]($1, $8, $4) | 0 | 0) < (0 | 0)) {
            break label$24
           }
           HEAP32[$6 >> 2] = $1;
           $7 = $7 + -1 | 0;
           break label$23;
          }
          HEAP32[$6 >> 2] = $8;
          $7 = $16;
          $1 = $8;
         }
         $6 = $6 + 4 | 0;
         $15 = $15 + 1 | 0;
         if (($7 | 0) > (1 | 0)) {
          continue label$21
         }
         break label$21;
        };
       }
       if ($15 >>> 0 < 2 >>> 0) {
        break label$18
       }
       $17 = ($5 + 192 | 0) + ($15 << 2 | 0) | 0;
       HEAP32[$17 >> 2] = $5 + 432 | 0;
       if (!$2) {
        break label$18
       }
       $18 = $15 & -2 | 0;
       $7 = $5 + 432 | 0;
       $8 = $0;
       $19 = $2;
       label$25 : while (1) {
        $1 = $19 >>> 0 < 256 >>> 0 ? $19 : 256;
        wasm2js_memory_copy($7, $8, $1);
        $16 = 0;
        label$26 : {
         label$27 : {
          if (($15 | 0) == (1 | 0)) {
           break label$27
          }
          $20 = $15 & 1 | 0;
          $16 = 0;
          $7 = $5 + 192 | 0;
          label$28 : while (1) {
           $21 = $7 + 4 | 0;
           $6 = HEAP32[$21 >> 2] | 0;
           wasm2js_memory_copy($8, $6, $1);
           HEAP32[$7 >> 2] = $8 + $1 | 0;
           $7 = $7 + 8 | 0;
           $8 = HEAP32[$7 >> 2] | 0;
           wasm2js_memory_copy($6, $8, $1);
           HEAP32[$21 >> 2] = $6 + $1 | 0;
           $16 = $16 + 2 | 0;
           if (($18 | 0) != ($16 | 0)) {
            continue label$28
           }
           break label$28;
          };
          if (!$20) {
           break label$26
          }
         }
         $7 = ($5 + 192 | 0) + ($16 << 2 | 0) | 0;
         wasm2js_memory_copy($8, HEAP32[($7 + 4 | 0) >> 2] | 0, $1);
         HEAP32[$7 >> 2] = $8 + $1 | 0;
        }
        $19 = $19 - $1 | 0;
        if (!$19) {
         break label$18
        }
        $7 = HEAP32[$17 >> 2] | 0;
        $8 = HEAP32[($5 + 192 | 0) >> 2] | 0;
        continue label$25;
       };
      }
      label$29 : {
       if (($13 | 0) != (1 | 0)) {
        break label$29
       }
       $11 = $11 << 1 | 0 | ($12 >>> 31 | 0) | 0;
       $1 = $12 << 1 | 0;
       $13 = 0;
       break label$6;
      }
      $1 = $22 >>> 0 > 31 >>> 0;
      $8 = $1 ? 0 : $12;
      $7 = $1 ? $13 + -33 | 0 : $22;
      $11 = $8 >>> (32 - $7 | 0) | 0 | (($1 ? $12 : $11) << $7 | 0) | 0;
      $1 = $8 << $7 | 0;
      $13 = 1;
     }
     $12 = $1 | 1 | 0;
     $0 = $0 + $2 | 0;
     if ($0 >>> 0 < $10 >>> 0) {
      continue label$5
     }
     break label$5;
    };
   }
   trinkle($0 | 0, $2 | 0, $3 | 0, $4 | 0, $12 | 0, $11 | 0, $13 | 0, 0 | 0, $5 | 0);
   $8 = $0 + $9 | 0;
   label$30 : while (1) {
    label$31 : {
     label$32 : {
      label$33 : {
       if (($12 | 0) != (1 | 0)) {
        break label$33
       }
       if (($13 | 0) != (1 | 0)) {
        break label$33
       }
       if ($11) {
        break label$32
       }
       break label$1;
      }
      if (($13 | 0) > (1 | 0)) {
       break label$31
      }
     }
     label$34 : {
      label$35 : {
       label$36 : {
        $1 = Math_imul((1 - $12 | 0) & ($12 + -1 | 0) | 0, 124511785);
        if ($1 >>> 0 > 134217727 >>> 0) {
         break label$36
        }
        $1 = 0;
        label$37 : {
         $7 = Math_imul($11 & (0 - $11 | 0) | 0, 124511785);
         if ($7 >>> 0 >= 134217728 >>> 0) {
          break label$37
         }
         $7 = 0;
         break label$34;
        }
        $1 = (HEAP8[(($7 >>> 27 | 0) + 1056 | 0) >> 0] | 0) + 32 | 0;
        break label$35;
       }
       $1 = HEAP8[(($1 >>> 27 | 0) + 1056 | 0) >> 0] | 0;
      }
      $6 = $1 >>> 0 > 31 >>> 0;
      $7 = $6 ? $1 + -32 | 0 : $1;
      $12 = $6 ? $11 : $12;
      $11 = $6 ? 0 : $11;
     }
     $12 = $11 << (32 - $7 | 0) | 0 | ($12 >>> $7 | 0) | 0;
     $13 = $1 + $13 | 0;
     $11 = $11 >>> $7 | 0;
     $8 = $8 + $9 | 0;
     continue label$30;
    }
    $1 = $13 + -1 | 0;
    $13 = $13 + -2 | 0;
    $7 = $12 >>> 30 | 0;
    $6 = (($12 << 1 | 0) & 2147483646 | 0 | ($7 << 31 | 0) | 0) ^ 3 | 0;
    $11 = $7 | ($11 << 2 | 0) | 0;
    trinkle($8 - (HEAP32[($5 + ($13 << 2 | 0) | 0) >> 2] | 0) | 0 | 0, $2 | 0, $3 | 0, $4 | 0, $6 | 0, $11 >>> 1 | 0 | 0, $1 | 0, 1 | 0, $5 | 0);
    $12 = $6 << 1 | 0 | 1 | 0;
    trinkle($8 | 0, $2 | 0, $3 | 0, $4 | 0, $12 | 0, $11 | 0, $13 | 0, 1 | 0, $5 | 0);
    $8 = $8 + $9 | 0;
    continue label$30;
   };
  }
  __stack_pointer = $5 + 688 | 0;
 }
 
 function smalloc($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $1 + $0 | 0;
  return $1 | 0;
 }
 
 function sfree($0) {
  $0 = $0 | 0;
 }
 
 function srealloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $2 + $1 | 0;
  label$1 : {
   if (!$0) {
    break label$1
   }
   wasm2js_memory_copy($2, $0, $1);
  }
  return $2 | 0;
 }
 
 function realloc($0, $1, $1$hi) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  var $2 = 0, $3 = 0;
  $2 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  $3 = $1;
  HEAP32[(0 + 1104 | 0) >> 2] = $2 + $3 | 0;
  wasm2js_memory_copy($2, $0, $3);
  return $2 | 0;
 }
 
 function memset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   $3 = $2 + -1 | 0;
   label$2 : {
    $4 = $2 & 7 | 0;
    if (!$4) {
     break label$2
    }
    label$3 : while (1) {
     HEAP8[$0 >> 0] = $1;
     $0 = $0 + 1 | 0;
     $2 = $2 + -1 | 0;
     $4 = $4 + -1 | 0;
     if ($4) {
      continue label$3
     }
     break label$3;
    };
   }
   if ($3 >>> 0 < 7 >>> 0) {
    break label$1
   }
   label$4 : while (1) {
    HEAP8[($0 + 7 | 0) >> 0] = $1;
    HEAP8[($0 + 6 | 0) >> 0] = $1;
    HEAP8[($0 + 5 | 0) >> 0] = $1;
    HEAP8[($0 + 4 | 0) >> 0] = $1;
    HEAP8[($0 + 3 | 0) >> 0] = $1;
    HEAP8[($0 + 2 | 0) >> 0] = $1;
    HEAP8[($0 + 1 | 0) >> 0] = $1;
    HEAP8[$0 >> 0] = $1;
    $0 = $0 + 8 | 0;
    $2 = $2 + -8 | 0;
    if ($2) {
     continue label$4
    }
    break label$4;
   };
  }
 }
 
 function memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $4 = 0, $3 = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   $3 = $2 + -1 | 0;
   label$2 : {
    label$3 : {
     $4 = $2 & 7 | 0;
     if ($4) {
      break label$3
     }
     $5 = $0;
     break label$2;
    }
    $5 = $0;
    label$4 : while (1) {
     HEAP8[$5 >> 0] = HEAPU8[$1 >> 0] | 0;
     $1 = $1 + 1 | 0;
     $5 = $5 + 1 | 0;
     $2 = $2 + -1 | 0;
     $4 = $4 + -1 | 0;
     if ($4) {
      continue label$4
     }
     break label$4;
    };
   }
   if ($3 >>> 0 < 7 >>> 0) {
    break label$1
   }
   label$5 : while (1) {
    HEAP8[$5 >> 0] = HEAPU8[$1 >> 0] | 0;
    HEAP8[($5 + 1 | 0) >> 0] = HEAPU8[($1 + 1 | 0) >> 0] | 0;
    HEAP8[($5 + 2 | 0) >> 0] = HEAPU8[($1 + 2 | 0) >> 0] | 0;
    HEAP8[($5 + 3 | 0) >> 0] = HEAPU8[($1 + 3 | 0) >> 0] | 0;
    HEAP8[($5 + 4 | 0) >> 0] = HEAPU8[($1 + 4 | 0) >> 0] | 0;
    HEAP8[($5 + 5 | 0) >> 0] = HEAPU8[($1 + 5 | 0) >> 0] | 0;
    HEAP8[($5 + 6 | 0) >> 0] = HEAPU8[($1 + 6 | 0) >> 0] | 0;
    HEAP8[($5 + 7 | 0) >> 0] = HEAPU8[($1 + 7 | 0) >> 0] | 0;
    $1 = $1 + 8 | 0;
    $5 = $5 + 8 | 0;
    $2 = $2 + -8 | 0;
    if ($2) {
     continue label$5
    }
    break label$5;
   };
  }
  return $0 | 0;
 }
 
 function trinkle($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $6 = $6 | 0;
  $7 = $7 | 0;
  $8 = $8 | 0;
  var $10 = 0, $9 = 0, $16 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $11 = 0, $17 = 0;
  $9 = __stack_pointer - 736 | 0;
  __stack_pointer = $9;
  HEAP32[$9 >> 2] = $0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($5) {
       break label$4
      }
      if (($4 | 0) == (1 | 0)) {
       break label$3
      }
     }
     $10 = $0 - (HEAP32[($8 + ($6 << 2 | 0) | 0) >> 2] | 0) | 0;
     if ((FUNCTION_TABLE[$2 | 0]($10, $0, $3) | 0 | 0) < (1 | 0)) {
      break label$3
     }
     $11 = 0 - $1 | 0;
     $12 = $9 | 4 | 0;
     $7 = !$7;
     $13 = 1;
     $14 = $0;
     label$5 : {
      label$6 : while (1) {
       $15 = $13;
       $16 = $10;
       label$7 : {
        if (!($7 & 1 | 0)) {
         break label$7
        }
        if (($6 | 0) < (2 | 0)) {
         break label$7
        }
        $10 = HEAP32[((($6 << 2 | 0) + $8 | 0) + -8 | 0) >> 2] | 0;
        label$8 : {
         $7 = $14 + $11 | 0;
         if ((FUNCTION_TABLE[$2 | 0]($7, $16, $3) | 0 | 0) <= (-1 | 0)) {
          break label$8
         }
         $16 = $14;
         break label$5;
        }
        if ((FUNCTION_TABLE[$2 | 0]($7 - $10 | 0, $16, $3) | 0 | 0) <= (-1 | 0)) {
         break label$7
        }
        $16 = $14;
        break label$5;
       }
       HEAP32[$12 >> 2] = $16;
       label$9 : {
        label$10 : {
         label$11 : {
          $10 = Math_imul((1 - $4 | 0) & ($4 + -1 | 0) | 0, 124511785);
          if ($10 >>> 0 > 134217727 >>> 0) {
           break label$11
          }
          $10 = 0;
          label$12 : {
           $7 = Math_imul($5 & (0 - $5 | 0) | 0, 124511785);
           if ($7 >>> 0 >= 134217728 >>> 0) {
            break label$12
           }
           $7 = 0;
           break label$9;
          }
          $10 = (HEAP8[(($7 >>> 27 | 0) + 1056 | 0) >> 0] | 0) + 32 | 0;
          break label$10;
         }
         $10 = HEAP8[(($10 >>> 27 | 0) + 1056 | 0) >> 0] | 0;
        }
        $13 = $10 >>> 0 > 31 >>> 0;
        $7 = $13 ? $10 + -32 | 0 : $10;
        $4 = $13 ? $5 : $4;
        $5 = $13 ? 0 : $5;
       }
       $13 = $15 + 1 | 0;
       $4 = $5 << (32 - $7 | 0) | 0 | ($4 >>> $7 | 0) | 0;
       $6 = $10 + $6 | 0;
       label$13 : {
        $5 = $5 >>> $7 | 0;
        if ($5) {
         break label$13
        }
        if (($4 | 0) != (1 | 0)) {
         break label$13
        }
        $15 = $13;
        break label$5;
       }
       $12 = $12 + 4 | 0;
       $7 = 1;
       $14 = $16;
       $10 = $16 - (HEAP32[($8 + ($6 << 2 | 0) | 0) >> 2] | 0) | 0;
       if ((FUNCTION_TABLE[$2 | 0]($10, $0, $3) | 0 | 0) >= (1 | 0)) {
        continue label$6
       }
       break label$6;
      };
      $15 = $15 + 1 | 0;
     }
     label$14 : {
      if ($15 >>> 0 < 2 >>> 0) {
       break label$14
      }
      $11 = $9 + ($15 << 2 | 0) | 0;
      HEAP32[$11 >> 2] = $9 + 480 | 0;
      if (!$1) {
       break label$14
      }
      $13 = $15 & -2 | 0;
      $4 = $9 + 480 | 0;
      $14 = $1;
      label$15 : while (1) {
       $5 = $14 >>> 0 < 256 >>> 0 ? $14 : 256;
       wasm2js_memory_copy($4, $0, $5);
       $7 = 0;
       label$16 : {
        label$17 : {
         if (($15 | 0) == (1 | 0)) {
          break label$17
         }
         $17 = $15 & 1 | 0;
         $7 = 0;
         $4 = $9;
         label$18 : while (1) {
          $12 = $4 + 4 | 0;
          $10 = HEAP32[$12 >> 2] | 0;
          wasm2js_memory_copy($0, $10, $5);
          HEAP32[$4 >> 2] = $0 + $5 | 0;
          $4 = $4 + 8 | 0;
          $0 = HEAP32[$4 >> 2] | 0;
          wasm2js_memory_copy($10, $0, $5);
          HEAP32[$12 >> 2] = $10 + $5 | 0;
          $7 = $7 + 2 | 0;
          if (($13 | 0) != ($7 | 0)) {
           continue label$18
          }
          break label$18;
         };
         if (!$17) {
          break label$16
         }
        }
        $4 = $9 + ($7 << 2 | 0) | 0;
        wasm2js_memory_copy($0, HEAP32[($4 + 4 | 0) >> 2] | 0, $5);
        HEAP32[$4 >> 2] = $0 + $5 | 0;
       }
       $14 = $14 - $5 | 0;
       if (!$14) {
        break label$14
       }
       $4 = HEAP32[$11 >> 2] | 0;
       $0 = HEAP32[$9 >> 2] | 0;
       continue label$15;
      };
     }
     $0 = $16;
     break label$2;
    }
    if ($7) {
     break label$1
    }
   }
   HEAP32[($9 + 240 | 0) >> 2] = $0;
   if (($6 | 0) <= (1 | 0)) {
    break label$1
   }
   $12 = 0 - $1 | 0;
   $10 = $9 + 240 | 0 | 4 | 0;
   $16 = 1;
   $5 = $0;
   label$19 : {
    label$20 : while (1) {
     label$21 : {
      $4 = $5 + $12 | 0;
      $7 = $6 + -2 | 0;
      $5 = $4 - (HEAP32[($8 + ($7 << 2 | 0) | 0) >> 2] | 0) | 0;
      if ((FUNCTION_TABLE[$2 | 0]($0, $5, $3) | 0 | 0) < (0 | 0)) {
       break label$21
      }
      if ((FUNCTION_TABLE[$2 | 0]($0, $4, $3) | 0 | 0) > (-1 | 0)) {
       break label$19
      }
     }
     label$22 : {
      label$23 : {
       if ((FUNCTION_TABLE[$2 | 0]($5, $4, $3) | 0 | 0) < (0 | 0)) {
        break label$23
       }
       HEAP32[$10 >> 2] = $5;
       $6 = $6 + -1 | 0;
       break label$22;
      }
      HEAP32[$10 >> 2] = $4;
      $6 = $7;
      $5 = $4;
     }
     $10 = $10 + 4 | 0;
     $16 = $16 + 1 | 0;
     if (($6 | 0) > (1 | 0)) {
      continue label$20
     }
     break label$20;
    };
   }
   if ($16 >>> 0 < 2 >>> 0) {
    break label$1
   }
   $6 = ($9 + 240 | 0) + ($16 << 2 | 0) | 0;
   HEAP32[$6 >> 2] = $9 + 480 | 0;
   if (!$1) {
    break label$1
   }
   $13 = $16 & -2 | 0;
   $4 = $9 + 480 | 0;
   label$24 : while (1) {
    $5 = $1 >>> 0 < 256 >>> 0 ? $1 : 256;
    wasm2js_memory_copy($4, $0, $5);
    $7 = 0;
    label$25 : {
     label$26 : {
      if (($16 | 0) == (1 | 0)) {
       break label$26
      }
      $3 = $16 & 1 | 0;
      $7 = 0;
      $4 = $9 + 240 | 0;
      label$27 : while (1) {
       $12 = $4 + 4 | 0;
       $10 = HEAP32[$12 >> 2] | 0;
       wasm2js_memory_copy($0, $10, $5);
       HEAP32[$4 >> 2] = $0 + $5 | 0;
       $4 = $4 + 8 | 0;
       $0 = HEAP32[$4 >> 2] | 0;
       wasm2js_memory_copy($10, $0, $5);
       HEAP32[$12 >> 2] = $10 + $5 | 0;
       $7 = $7 + 2 | 0;
       if (($13 | 0) != ($7 | 0)) {
        continue label$27
       }
       break label$27;
      };
      if (!$3) {
       break label$25
      }
     }
     $4 = ($9 + 240 | 0) + ($7 << 2 | 0) | 0;
     wasm2js_memory_copy($0, HEAP32[($4 + 4 | 0) >> 2] | 0, $5);
     HEAP32[$4 >> 2] = $0 + $5 | 0;
    }
    $1 = $1 - $5 | 0;
    if (!$1) {
     break label$1
    }
    $4 = HEAP32[$6 >> 2] | 0;
    $0 = HEAP32[($9 + 240 | 0) >> 2] | 0;
    continue label$24;
   };
  }
  __stack_pointer = $9 + 736 | 0;
 }
 
 function malloc($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var $1 = 0;
  $1 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $1 + $0 | 0;
  return $1 | 0;
 }
 
 function free($0) {
  $0 = $0 | 0;
 }
 
 function newtree234($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[($1 + 4 | 0) >> 2] = $0;
  HEAP32[$1 >> 2] = 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $1 + 8 | 0;
  return $1 | 0;
 }
 
 function freetree234($0) {
  $0 = $0 | 0;
  freenode234(HEAP32[$0 >> 2] | 0 | 0);
 }
 
 function count234($0) {
  $0 = $0 | 0;
  label$1 : {
   $0 = HEAP32[$0 >> 2] | 0;
   if ($0) {
    break label$1
   }
   return 0 | 0;
  }
  return ((((((HEAP32[($0 + 24 | 0) >> 2] | 0) + (HEAP32[($0 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($0 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0 | 0;
 }
 
 function add234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if (HEAP32[($0 + 4 | 0) >> 2] | 0) {
    break label$1
   }
   return 0 | 0;
  }
  return add234_internal($0 | 0, $1 | 0, -1 | 0) | 0 | 0;
 }
 
 function addpos234($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = 0;
  label$1 : {
   if (($2 | 0) < (0 | 0)) {
    break label$1
   }
   if (HEAP32[($0 + 4 | 0) >> 2] | 0) {
    break label$1
   }
   $3 = add234_internal($0 | 0, $1 | 0, $2 | 0) | 0;
  }
  return $3 | 0;
 }
 
 function index234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = 0;
  label$1 : {
   if (($1 | 0) < (0 | 0)) {
    break label$1
   }
   $0 = HEAP32[$0 >> 2] | 0;
   if (!$0) {
    break label$1
   }
   $2 = 0;
   $3 = HEAP32[($0 + 20 | 0) >> 2] | 0;
   if ((((((((HEAP32[($0 + 24 | 0) >> 2] | 0) + $3 | 0) + (HEAP32[($0 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($0 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0 | 0) <= ($1 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    label$3 : {
     label$4 : {
      if (($1 | 0) >= ($3 | 0)) {
       break label$4
      }
      $0 = $0 + 4 | 0;
      break label$3;
     }
     label$5 : {
      label$6 : {
       label$7 : {
        $1 = $1 + ($3 ^ -1 | 0) | 0;
        if (($1 | 0) > (-1 | 0)) {
         break label$7
        }
        $0 = $0 + 36 | 0;
        break label$6;
       }
       label$8 : {
        $3 = HEAP32[($0 + 24 | 0) >> 2] | 0;
        if (($1 | 0) >= ($3 | 0)) {
         break label$8
        }
        $0 = $0 + 8 | 0;
        break label$3;
       }
       label$9 : {
        $1 = $1 + ($3 ^ -1 | 0) | 0;
        if (($1 | 0) > (-1 | 0)) {
         break label$9
        }
        $0 = $0 + 40 | 0;
        break label$6;
       }
       label$10 : {
        $3 = HEAP32[($0 + 28 | 0) >> 2] | 0;
        if (($1 | 0) >= ($3 | 0)) {
         break label$10
        }
        $0 = $0 + 12 | 0;
        break label$3;
       }
       $1 = $1 + ($3 ^ -1 | 0) | 0;
       if (($1 | 0) > (-1 | 0)) {
        break label$5
       }
       $0 = $0 + 44 | 0;
      }
      $2 = HEAP32[$0 >> 2] | 0;
      break label$1;
     }
     $0 = $0 + 16 | 0;
    }
    $0 = HEAP32[$0 >> 2] | 0;
    if (!$0) {
     break label$1
    }
    $3 = HEAP32[($0 + 20 | 0) >> 2] | 0;
    continue label$2;
   };
  }
  return $2 | 0;
 }
 
 function findrelpos234($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $5 = 0;
  $5 = 0;
  label$1 : {
   $6 = HEAP32[$0 >> 2] | 0;
   if (!$6) {
    break label$1
   }
   label$2 : {
    if ($2) {
     break label$2
    }
    $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   }
   label$3 : {
    label$4 : {
     label$5 : {
      label$6 : {
       if ($1) {
        break label$6
       }
       $7 = 0;
       $8 = 0;
       label$7 : {
        switch ($3 + -1 | 0 | 0) {
        case 2:
         $8 = 1;
         break;
        case 0:
         break label$7;
        default:
         break label$6;
        };
       }
       label$9 : while (1) {
        $9 = 0;
        label$10 : {
         if (!(HEAP32[($6 + 36 | 0) >> 2] | 0) | $8 | 0) {
          break label$10
         }
         label$11 : {
          if (!(HEAP32[($6 + 4 | 0) >> 2] | 0)) {
           break label$11
          }
          $7 = (HEAP32[($6 + 20 | 0) >> 2] | 0) + $7 | 0;
         }
         $9 = 1;
         $7 = $7 + 1 | 0;
         if (!(HEAP32[($6 + 40 | 0) >> 2] | 0)) {
          break label$10
         }
         label$12 : {
          if (!(HEAP32[($6 + 8 | 0) >> 2] | 0)) {
           break label$12
          }
          $7 = (HEAP32[($6 + 24 | 0) >> 2] | 0) + $7 | 0;
         }
         $7 = $7 + 1 | 0;
         label$13 : {
          if (HEAP32[($6 + 44 | 0) >> 2] | 0) {
           break label$13
          }
          $9 = 2;
          break label$10;
         }
         label$14 : {
          if (!(HEAP32[($6 + 12 | 0) >> 2] | 0)) {
           break label$14
          }
          $7 = (HEAP32[($6 + 28 | 0) >> 2] | 0) + $7 | 0;
         }
         $7 = $7 + 1 | 0;
         $9 = 3;
        }
        $6 = HEAP32[(($6 + ($9 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
        if ($6) {
         continue label$9
        }
        break label$5;
       };
      }
      $7 = 0;
      label$15 : while (1) {
       label$16 : {
        label$17 : {
         $8 = HEAP32[($6 + 36 | 0) >> 2] | 0;
         if ($8) {
          break label$17
         }
         $9 = 0;
         break label$16;
        }
        $9 = 0;
        $8 = FUNCTION_TABLE[$2 | 0]($1, $8) | 0;
        if (($8 | 0) < (0 | 0)) {
         break label$16
        }
        label$18 : {
         if (!(HEAP32[($6 + 4 | 0) >> 2] | 0)) {
          break label$18
         }
         $7 = (HEAP32[($6 + 20 | 0) >> 2] | 0) + $7 | 0;
        }
        label$19 : {
         if ($8) {
          break label$19
         }
         $9 = 0;
         break label$4;
        }
        $9 = 1;
        $7 = $7 + 1 | 0;
        $8 = HEAP32[($6 + 40 | 0) >> 2] | 0;
        if (!$8) {
         break label$16
        }
        $8 = FUNCTION_TABLE[$2 | 0]($1, $8) | 0;
        if (($8 | 0) < (0 | 0)) {
         break label$16
        }
        label$20 : {
         if (!(HEAP32[($6 + 8 | 0) >> 2] | 0)) {
          break label$20
         }
         $7 = (HEAP32[($6 + 24 | 0) >> 2] | 0) + $7 | 0;
        }
        label$21 : {
         if ($8) {
          break label$21
         }
         $9 = 1;
         break label$4;
        }
        $7 = $7 + 1 | 0;
        $9 = 2;
        $8 = HEAP32[($6 + 44 | 0) >> 2] | 0;
        if (!$8) {
         break label$16
        }
        $8 = FUNCTION_TABLE[$2 | 0]($1, $8) | 0;
        if (($8 | 0) < (0 | 0)) {
         break label$16
        }
        label$22 : {
         if (!(HEAP32[($6 + 12 | 0) >> 2] | 0)) {
          break label$22
         }
         $7 = (HEAP32[($6 + 28 | 0) >> 2] | 0) + $7 | 0;
        }
        label$23 : {
         if ($8) {
          break label$23
         }
         $9 = 2;
         break label$4;
        }
        $7 = $7 + 1 | 0;
        $9 = 3;
       }
       $6 = HEAP32[(($6 + ($9 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if ($6) {
        continue label$15
       }
       break label$15;
      };
     }
     if (!$3) {
      break label$1
     }
     $8 = $7 - (($3 + -1 | 0) >>> 0 < 2 >>> 0) | 0;
     break label$3;
    }
    label$24 : {
     if (($3 & -3 | 0 | 0) == (1 | 0)) {
      break label$24
     }
     label$25 : {
      if (!$4) {
       break label$25
      }
      HEAP32[$4 >> 2] = $7;
     }
     $5 = HEAP32[(($6 + ($9 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
     break label$1;
    }
    label$26 : {
     if (($3 | 0) != (1 | 0)) {
      break label$26
     }
     $8 = $7 + -1 | 0;
     break label$3;
    }
    $8 = $7 + 1 | 0;
   }
   $5 = 0;
   if (($8 | 0) < (0 | 0)) {
    break label$1
   }
   $6 = HEAP32[$0 >> 2] | 0;
   if (!$6) {
    break label$1
   }
   $5 = 0;
   $9 = HEAP32[($6 + 20 | 0) >> 2] | 0;
   if ((((((((HEAP32[($6 + 24 | 0) >> 2] | 0) + $9 | 0) + (HEAP32[($6 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($6 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($6 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($6 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($6 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0 | 0) <= ($8 | 0)) {
    break label$1
   }
   $7 = $8;
   label$27 : while (1) {
    label$28 : {
     label$29 : {
      if (($7 | 0) >= ($9 | 0)) {
       break label$29
      }
      $6 = $6 + 4 | 0;
      break label$28;
     }
     label$30 : {
      label$31 : {
       label$32 : {
        $7 = $7 + ($9 ^ -1 | 0) | 0;
        if (($7 | 0) > (-1 | 0)) {
         break label$32
        }
        $6 = $6 + 36 | 0;
        break label$31;
       }
       label$33 : {
        $9 = HEAP32[($6 + 24 | 0) >> 2] | 0;
        if (($7 | 0) >= ($9 | 0)) {
         break label$33
        }
        $6 = $6 + 8 | 0;
        break label$28;
       }
       label$34 : {
        $7 = $7 + ($9 ^ -1 | 0) | 0;
        if (($7 | 0) > (-1 | 0)) {
         break label$34
        }
        $6 = $6 + 40 | 0;
        break label$31;
       }
       label$35 : {
        $9 = HEAP32[($6 + 28 | 0) >> 2] | 0;
        if (($7 | 0) >= ($9 | 0)) {
         break label$35
        }
        $6 = $6 + 12 | 0;
        break label$28;
       }
       $7 = $7 + ($9 ^ -1 | 0) | 0;
       if (($7 | 0) > (-1 | 0)) {
        break label$30
       }
       $6 = $6 + 44 | 0;
      }
      $5 = HEAP32[$6 >> 2] | 0;
      if (!$4) {
       break label$1
      }
      if (!$5) {
       break label$1
      }
      HEAP32[$4 >> 2] = $8;
      return $5 | 0;
     }
     $6 = $6 + 16 | 0;
    }
    $6 = HEAP32[$6 >> 2] | 0;
    if (!$6) {
     break label$1
    }
    $9 = HEAP32[($6 + 20 | 0) >> 2] | 0;
    continue label$27;
   };
  }
  return $5 | 0;
 }
 
 function find234($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  return findrelpos234($0 | 0, $1 | 0, $2 | 0, 0 | 0, 0 | 0) | 0 | 0;
 }
 
 function findrel234($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  return findrelpos234($0 | 0, $1 | 0, $2 | 0, $3 | 0, 0 | 0) | 0 | 0;
 }
 
 function findpos234($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  return findrelpos234($0 | 0, $1 | 0, $2 | 0, 0 | 0, $3 | 0) | 0 | 0;
 }
 
 function delpos234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $2 = 0, $3 = 0;
  $2 = 0;
  label$1 : {
   if (($1 | 0) < (0 | 0)) {
    break label$1
   }
   $2 = 0;
   $3 = 0;
   label$2 : {
    $4 = HEAP32[$0 >> 2] | 0;
    if (!$4) {
     break label$2
    }
    $3 = ((((((HEAP32[($4 + 24 | 0) >> 2] | 0) + (HEAP32[($4 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($4 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($4 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($4 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($4 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($4 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
   }
   if (($3 | 0) <= ($1 | 0)) {
    break label$1
   }
   $2 = delpos234_internal($0 | 0, $1 | 0) | 0;
  }
  return $2 | 0;
 }
 
 function trans234_subtree_merge($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $9 = 0, $6 = 0, $10 = 0, $5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $11 = 0, i64toi32_i32$2 = 0, $4 = 0, $7 = 0, $13 = 0, $8 = 0, $12 = 0, $76 = 0, $105 = 0, $194 = 0, $199 = 0, $241 = 0, $246 = 0;
  $4 = 2;
  $5 = $0 + 20 | 0;
  $6 = $0 + 4 | 0;
  $7 = $1 + 1 | 0;
  $8 = $7 << 2 | 0;
  $9 = HEAP32[($6 + $8 | 0) >> 2] | 0;
  $10 = 2;
  label$1 : {
   $11 = $1 << 2 | 0;
   $6 = HEAP32[($6 + $11 | 0) >> 2] | 0;
   if (HEAP32[($6 + 40 | 0) >> 2] | 0) {
    break label$1
   }
   $10 = (HEAP32[($6 + 36 | 0) >> 2] | 0 | 0) != (0 | 0);
  }
  $11 = $5 + $11 | 0;
  $5 = $5 + $8 | 0;
  label$2 : {
   if (HEAP32[($9 + 40 | 0) >> 2] | 0) {
    break label$2
   }
   $4 = (HEAP32[($9 + 36 | 0) >> 2] | 0 | 0) != (0 | 0);
  }
  $12 = HEAP32[$11 >> 2] | 0;
  $8 = HEAP32[$5 >> 2] | 0;
  HEAP32[(($6 + ($10 << 2 | 0) | 0) + 36 | 0) >> 2] = HEAP32[(($0 + ($1 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
  $13 = $10 + 1 | 0;
  $5 = $6 + ($13 << 2 | 0) | 0;
  HEAP32[($5 + 20 | 0) >> 2] = HEAP32[($9 + 20 | 0) >> 2] | 0;
  $76 = $5 + 4 | 0;
  $5 = HEAP32[($9 + 4 | 0) >> 2] | 0;
  HEAP32[$76 >> 2] = $5;
  label$3 : {
   if (!$5) {
    break label$3
   }
   HEAP32[$5 >> 2] = $6;
  }
  label$4 : {
   if (!$4) {
    break label$4
   }
   HEAP32[(($6 + ($13 << 2 | 0) | 0) + 36 | 0) >> 2] = HEAP32[($9 + 36 | 0) >> 2] | 0;
   $13 = $10 + 2 | 0;
   $5 = $6 + ($13 << 2 | 0) | 0;
   HEAP32[($5 + 20 | 0) >> 2] = HEAP32[($9 + 24 | 0) >> 2] | 0;
   $105 = $5 + 4 | 0;
   $5 = HEAP32[($9 + 8 | 0) >> 2] | 0;
   HEAP32[$105 >> 2] = $5;
   label$5 : {
    if (!$5) {
     break label$5
    }
    HEAP32[$5 >> 2] = $6;
   }
   if ($4 >>> 0 < 2 >>> 0) {
    break label$4
   }
   HEAP32[(($6 + ($13 << 2 | 0) | 0) + 36 | 0) >> 2] = HEAP32[($9 + 40 | 0) >> 2] | 0;
   $10 = ($10 << 2 | 0) + $6 | 0;
   HEAP32[($10 + 32 | 0) >> 2] = HEAP32[($9 + 28 | 0) >> 2] | 0;
   $9 = HEAP32[($9 + 12 | 0) >> 2] | 0;
   HEAP32[($10 + 16 | 0) >> 2] = $9;
   if (!$9) {
    break label$4
   }
   HEAP32[$9 >> 2] = $6;
  }
  HEAP32[$11 >> 2] = ($8 + (HEAP32[$11 >> 2] | 0) | 0) + 1 | 0;
  label$6 : {
   if (($1 | 0) > (1 | 0)) {
    break label$6
   }
   $9 = $7;
   label$7 : {
    $10 = 2 - $1 | 0;
    if (!($10 & 1 | 0)) {
     break label$7
    }
    $6 = $0 + 4 | 0;
    $11 = $7 << 2 | 0;
    $9 = $1 + 2 | 0;
    $4 = $9 << 2 | 0;
    HEAP32[($6 + $11 | 0) >> 2] = HEAP32[($6 + $4 | 0) >> 2] | 0;
    $6 = $0 + 20 | 0;
    HEAP32[($6 + $11 | 0) >> 2] = HEAP32[($6 + $4 | 0) >> 2] | 0;
   }
   label$8 : {
    if (($1 | 0) == (1 | 0)) {
     break label$8
    }
    $6 = $9 + -3 | 0;
    $9 = (($9 << 2 | 0) + $0 | 0) + 28 | 0;
    label$9 : while (1) {
     i64toi32_i32$2 = $9 + -20 | 0;
     i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $194 = i64toi32_i32$0;
     i64toi32_i32$0 = $9 + -24 | 0;
     HEAP32[i64toi32_i32$0 >> 2] = $194;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
     i64toi32_i32$2 = $9 + -4 | 0;
     i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
     $199 = i64toi32_i32$1;
     i64toi32_i32$1 = $9 + -8 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = $199;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
     $9 = $9 + 8 | 0;
     $6 = $6 + 2 | 0;
     if ($6) {
      continue label$9
     }
     break label$9;
    };
   }
   $6 = $1;
   label$10 : {
    $10 = $10 & 3 | 0;
    if (!$10) {
     break label$10
    }
    $9 = (($1 << 2 | 0) + $0 | 0) + 36 | 0;
    $6 = $1;
    label$11 : while (1) {
     $11 = $9 + 4 | 0;
     HEAP32[$9 >> 2] = HEAP32[$11 >> 2] | 0;
     $6 = $6 + 1 | 0;
     $9 = $11;
     $10 = $10 + -1 | 0;
     if ($10) {
      continue label$11
     }
     break label$11;
    };
   }
   if (($1 + 1 | 0) >>> 0 < 3 >>> 0) {
    break label$6
   }
   $10 = $6 + -2 | 0;
   $9 = (($6 << 2 | 0) + $0 | 0) + 52 | 0;
   label$12 : while (1) {
    i64toi32_i32$2 = $9 + -12 | 0;
    i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $241 = i64toi32_i32$0;
    i64toi32_i32$0 = $9 + -16 | 0;
    HEAP32[i64toi32_i32$0 >> 2] = $241;
    HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
    i64toi32_i32$2 = $9 + -4 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $246 = i64toi32_i32$1;
    i64toi32_i32$1 = $9 + -8 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $246;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    $9 = $9 + 16 | 0;
    $10 = $10 + 4 | 0;
    if ($10) {
     continue label$12
    }
    break label$12;
   };
  }
  HEAP32[($0 + 44 | 0) >> 2] = 0;
  HEAP32[($0 + 32 | 0) >> 2] = 0;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  label$13 : {
   if (!$2) {
    break label$13
   }
   label$14 : {
    $9 = HEAP32[$2 >> 2] | 0;
    if (($9 | 0) != ($7 | 0)) {
     break label$14
    }
    HEAP32[$2 >> 2] = $1;
    HEAP32[$3 >> 2] = ($12 + (HEAP32[$3 >> 2] | 0) | 0) + 1 | 0;
    return;
   }
   if (($9 | 0) <= ($7 | 0)) {
    break label$13
   }
   HEAP32[$2 >> 2] = $9 + -1 | 0;
  }
 }
 
 function join234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $6 = 0, $2 = 0, $9 = 0, $7 = 0, $8 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  label$1 : {
   $3 = HEAP32[$1 >> 2] | 0;
   if (!$3) {
    break label$1
   }
   $4 = HEAP32[($3 + 20 | 0) >> 2] | 0;
   $5 = (((HEAP32[($3 + 24 | 0) >> 2] | 0) + $4 | 0) + (HEAP32[($3 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($3 + 32 | 0) >> 2] | 0) | 0;
   $6 = HEAP32[($3 + 36 | 0) >> 2] | 0;
   $7 = HEAP32[($3 + 40 | 0) >> 2] | 0;
   $8 = HEAP32[($3 + 44 | 0) >> 2] | 0;
   if (((($5 + (($6 | 0) != (0 | 0)) | 0) + (($7 | 0) != (0 | 0)) | 0) + (($8 | 0) != (0 | 0)) | 0 | 0) < (1 | 0)) {
    break label$1
   }
   label$2 : {
    label$3 : {
     if (!(HEAP32[($0 + 4 | 0) >> 2] | 0)) {
      break label$3
     }
     $5 = 0;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          if (($5 | 0) >= ($4 | 0)) {
           break label$8
          }
          $3 = $3 + 4 | 0;
          break label$7;
         }
         label$9 : {
          $5 = $5 + ($4 ^ -1 | 0) | 0;
          if (($5 | 0) > (-1 | 0)) {
           break label$9
          }
          $3 = HEAP32[($3 + 36 | 0) >> 2] | 0;
          break label$6;
         }
         label$10 : {
          $4 = HEAP32[($3 + 24 | 0) >> 2] | 0;
          if (($5 | 0) >= ($4 | 0)) {
           break label$10
          }
          $3 = $3 + 8 | 0;
          break label$7;
         }
         label$11 : {
          $5 = $5 + ($4 ^ -1 | 0) | 0;
          if (($5 | 0) > (-1 | 0)) {
           break label$11
          }
          $3 = HEAP32[($3 + 40 | 0) >> 2] | 0;
          break label$6;
         }
         label$12 : {
          $4 = HEAP32[($3 + 28 | 0) >> 2] | 0;
          if (($5 | 0) >= ($4 | 0)) {
           break label$12
          }
          $3 = $3 + 12 | 0;
          break label$7;
         }
         label$13 : {
          $5 = $5 + ($4 ^ -1 | 0) | 0;
          if (($5 | 0) > (-1 | 0)) {
           break label$13
          }
          $3 = HEAP32[($3 + 44 | 0) >> 2] | 0;
          break label$6;
         }
         $3 = $3 + 16 | 0;
        }
        $3 = HEAP32[$3 >> 2] | 0;
        if ($3) {
         break label$5
        }
        $3 = 0;
       }
       label$14 : {
        if (findrelpos234($0 | 0, $3 | 0, 0 | 0, 4 | 0, 0 | 0) | 0) {
         break label$14
        }
        label$15 : {
         $3 = HEAP32[$1 >> 2] | 0;
         if ($3) {
          break label$15
         }
         $9 = 0;
         break label$2;
        }
        $5 = (((HEAP32[($3 + 24 | 0) >> 2] | 0) + (HEAP32[($3 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($3 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($3 + 32 | 0) >> 2] | 0) | 0;
        $8 = HEAP32[($3 + 44 | 0) >> 2] | 0;
        $7 = HEAP32[($3 + 40 | 0) >> 2] | 0;
        $6 = HEAP32[($3 + 36 | 0) >> 2] | 0;
        break label$3;
       }
       $0 = 0;
       break label$1;
      }
      $4 = HEAP32[($3 + 20 | 0) >> 2] | 0;
      continue label$4;
     };
    }
    $9 = 0;
    if (((($5 + (($6 | 0) != (0 | 0)) | 0) + (($7 | 0) != (0 | 0)) | 0) + (($8 | 0) != (0 | 0)) | 0 | 0) < (1 | 0)) {
     break label$2
    }
    $9 = delpos234_internal($1 | 0, 0 | 0) | 0;
   }
   label$16 : {
    label$17 : {
     $4 = HEAP32[$0 >> 2] | 0;
     if ($4) {
      break label$17
     }
     $3 = 0;
     break label$16;
    }
    $3 = 0;
    $5 = $4;
    label$18 : while (1) {
     $3 = $3 + 1 | 0;
     $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
     if ($5) {
      continue label$18
     }
     break label$18;
    };
   }
   label$19 : {
    label$20 : {
     $6 = HEAP32[$1 >> 2] | 0;
     if (!$6) {
      break label$20
     }
     $5 = $6;
     label$21 : while (1) {
      $3 = $3 + -1 | 0;
      $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
      if ($5) {
       continue label$21
      }
      break label$21;
     };
     HEAP32[($2 + 12 | 0) >> 2] = $3;
     $3 = join234_internal($4 | 0, $9 | 0, $6 | 0, $2 + 12 | 0 | 0) | 0;
     break label$19;
    }
    HEAP32[($2 + 12 | 0) >> 2] = $3;
    $3 = join234_internal($4 | 0, $9 | 0, 0 | 0, $2 + 12 | 0 | 0) | 0;
   }
   HEAP32[$0 >> 2] = $3;
   HEAP32[$1 >> 2] = 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $0 | 0;
 }
 
 function join234_internal($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $7 = 0, $6 = 0, $5 = 0, $4 = 0, i64toi32_i32$0 = 0, $8 = 0, $9 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  label$1 : {
   label$2 : {
    $5 = HEAP32[$3 >> 2] | 0;
    if ($5) {
     break label$2
    }
    $6 = 0;
    $7 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[($7 + 4 | 0) >> 2] = $0;
    HEAP32[(0 + 1104 | 0) >> 2] = $7 + 48 | 0;
    $8 = 0;
    label$3 : {
     if (!$0) {
      break label$3
     }
     $8 = ((((((HEAP32[($0 + 24 | 0) >> 2] | 0) + (HEAP32[($0 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($0 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($0 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    }
    HEAP32[($7 + 36 | 0) >> 2] = $1;
    HEAP32[($7 + 20 | 0) >> 2] = $8;
    HEAP32[($7 + 8 | 0) >> 2] = $2;
    label$4 : {
     if (!$2) {
      break label$4
     }
     $6 = ((((((HEAP32[($2 + 24 | 0) >> 2] | 0) + (HEAP32[($2 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($2 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($2 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($2 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($2 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($2 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    }
    HEAP32[($7 + 24 | 0) >> 2] = $6;
    i64toi32_i32$0 = 0;
    HEAP32[($7 + 40 | 0) >> 2] = 0;
    HEAP32[($7 + 44 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    HEAP32[($7 + 28 | 0) >> 2] = 0;
    HEAP32[($7 + 32 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    HEAP32[($7 + 12 | 0) >> 2] = 0;
    HEAP32[($7 + 16 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[$7 >> 2] = 0;
    label$5 : {
     if (!$0) {
      break label$5
     }
     HEAP32[$0 >> 2] = $7;
    }
    label$6 : {
     if (!$2) {
      break label$6
     }
     HEAP32[$2 >> 2] = $7;
    }
    HEAP32[$3 >> 2] = 1;
    break label$1;
   }
   label$7 : {
    label$8 : {
     if (($5 | 0) > (-1 | 0)) {
      break label$8
     }
     HEAP32[($4 + 12 | 0) >> 2] = $2;
     $9 = 0;
     label$9 : {
      label$10 : {
       $6 = (0 - $5 | 0) & 7 | 0;
       if ($6) {
        break label$10
       }
       $7 = $5;
       break label$9;
      }
      $7 = $5;
      label$11 : while (1) {
       $7 = $7 + 1 | 0;
       $8 = $2;
       $2 = HEAP32[($2 + 4 | 0) >> 2] | 0;
       $6 = $6 + -1 | 0;
       if ($6) {
        continue label$11
       }
       break label$11;
      };
     }
     label$12 : {
      if ($5 >>> 0 <= -8 >>> 0) {
       break label$12
      }
      $7 = $0;
      $0 = $8;
      break label$7;
     }
     label$13 : while (1) {
      $6 = HEAP32[((HEAP32[((HEAP32[((HEAP32[((HEAP32[((HEAP32[((HEAP32[($2 + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0) + 4 | 0) >> 2] | 0;
      $2 = HEAP32[($6 + 4 | 0) >> 2] | 0;
      $7 = $7 + 8 | 0;
      if ($7) {
       continue label$13
      }
      break label$13;
     };
     $7 = $0;
     $0 = $6;
     break label$7;
    }
    HEAP32[($4 + 12 | 0) >> 2] = $0;
    $6 = HEAP32[($0 + 44 | 0) >> 2] | 0;
    $7 = ($6 | 0) != (0 | 0);
    label$14 : {
     if (($5 | 0) < (2 | 0)) {
      break label$14
     }
     label$15 : {
      label$16 : {
       if (!($5 & 1 | 0)) {
        break label$16
       }
       $6 = $5;
       break label$15;
      }
      label$17 : {
       label$18 : {
        if ($6) {
         break label$18
        }
        label$19 : {
         if (!(HEAP32[($0 + 40 | 0) >> 2] | 0)) {
          break label$19
         }
         $7 = $0 + 12 | 0;
         break label$17;
        }
        $7 = $0 + 8 | 0;
        break label$17;
       }
       $7 = $0 + 16 | 0;
      }
      $6 = $5 + -1 | 0;
      $0 = HEAP32[$7 >> 2] | 0;
      $7 = (HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0);
     }
     if (($5 | 0) == (2 | 0)) {
      break label$14
     }
     $6 = $6 + 2 | 0;
     label$20 : while (1) {
      label$21 : {
       label$22 : {
        if (!($7 & 1 | 0)) {
         break label$22
        }
        $7 = $0 + 16 | 0;
        break label$21;
       }
       label$23 : {
        if (!(HEAP32[($0 + 40 | 0) >> 2] | 0)) {
         break label$23
        }
        $7 = $0 + 12 | 0;
        break label$21;
       }
       $7 = $0 + 8 | 0;
      }
      label$24 : {
       label$25 : {
        $7 = HEAP32[$7 >> 2] | 0;
        if (HEAP32[($7 + 44 | 0) >> 2] | 0) {
         break label$25
        }
        label$26 : {
         if (!(HEAP32[($7 + 40 | 0) >> 2] | 0)) {
          break label$26
         }
         $7 = $7 + 12 | 0;
         break label$24;
        }
        $7 = $7 + 8 | 0;
        break label$24;
       }
       $7 = $7 + 16 | 0;
      }
      $0 = HEAP32[$7 >> 2] | 0;
      $7 = (HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0);
      $6 = $6 + -2 | 0;
      if (($6 | 0) > (3 | 0)) {
       continue label$20
      }
      break label$20;
     };
    }
    $9 = 3;
    label$27 : {
     if ($7 & 1 | 0) {
      break label$27
     }
     $9 = HEAP32[($0 + 40 | 0) >> 2] | 0 ? 2 : 1;
    }
    $7 = HEAP32[(($0 + ($9 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
   }
   (wasm2js_i32$0 = $3, wasm2js_i32$1 = add234_insert($7 | 0, $1 | 0, $2 | 0, $4 + 12 | 0 | 0, $0 | 0, $9 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   $7 = HEAP32[($4 + 12 | 0) >> 2] | 0;
  }
  __stack_pointer = $4 + 16 | 0;
  return $7 | 0;
 }
 
 function join234r($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $4 = 0, $7 = 0, $5 = 0, $2 = 0, $8 = 0, $6 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  label$1 : {
   $3 = HEAP32[$0 >> 2] | 0;
   if (!$3) {
    break label$1
   }
   $4 = HEAP32[($3 + 20 | 0) >> 2] | 0;
   $5 = ((((((HEAP32[($3 + 24 | 0) >> 2] | 0) + $4 | 0) + (HEAP32[($3 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($3 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($3 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($3 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($3 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
   if (($5 | 0) < (1 | 0)) {
    break label$1
   }
   $6 = $5 + -1 | 0;
   label$2 : {
    label$3 : {
     if (!(HEAP32[($1 + 4 | 0) >> 2] | 0)) {
      break label$3
     }
     $7 = $6;
     label$4 : while (1) {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          if (($7 | 0) >= ($4 | 0)) {
           break label$8
          }
          $3 = $3 + 4 | 0;
          break label$7;
         }
         label$9 : {
          $7 = $7 + ($4 ^ -1 | 0) | 0;
          if (($7 | 0) > (-1 | 0)) {
           break label$9
          }
          $3 = HEAP32[($3 + 36 | 0) >> 2] | 0;
          break label$6;
         }
         label$10 : {
          $4 = HEAP32[($3 + 24 | 0) >> 2] | 0;
          if (($7 | 0) >= ($4 | 0)) {
           break label$10
          }
          $3 = $3 + 8 | 0;
          break label$7;
         }
         label$11 : {
          $7 = $7 + ($4 ^ -1 | 0) | 0;
          if (($7 | 0) > (-1 | 0)) {
           break label$11
          }
          $3 = HEAP32[($3 + 40 | 0) >> 2] | 0;
          break label$6;
         }
         label$12 : {
          $4 = HEAP32[($3 + 28 | 0) >> 2] | 0;
          if (($7 | 0) >= ($4 | 0)) {
           break label$12
          }
          $3 = $3 + 12 | 0;
          break label$7;
         }
         label$13 : {
          $7 = $7 + ($4 ^ -1 | 0) | 0;
          if (($7 | 0) > (-1 | 0)) {
           break label$13
          }
          $3 = HEAP32[($3 + 44 | 0) >> 2] | 0;
          break label$6;
         }
         $3 = $3 + 16 | 0;
        }
        $3 = HEAP32[$3 >> 2] | 0;
        if ($3) {
         break label$5
        }
        $3 = 0;
       }
       label$14 : {
        if (findrelpos234($1 | 0, $3 | 0, 0 | 0, 2 | 0, 0 | 0) | 0) {
         break label$14
        }
        $3 = HEAP32[$0 >> 2] | 0;
        if ($3) {
         break label$3
        }
        $4 = 0;
        break label$2;
       }
       $1 = 0;
       break label$1;
      }
      $4 = HEAP32[($3 + 20 | 0) >> 2] | 0;
      continue label$4;
     };
    }
    $4 = ((((((HEAP32[($3 + 24 | 0) >> 2] | 0) + (HEAP32[($3 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($3 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($3 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($3 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($3 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($3 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
   }
   $7 = 0;
   $8 = 0;
   label$15 : {
    if (($4 | 0) < ($5 | 0)) {
     break label$15
    }
    $8 = delpos234_internal($0 | 0, $6 | 0) | 0;
    $3 = HEAP32[$0 >> 2] | 0;
   }
   label$16 : {
    if (!$3) {
     break label$16
    }
    $7 = 0;
    $4 = $3;
    label$17 : while (1) {
     $7 = $7 + 1 | 0;
     $4 = HEAP32[($4 + 4 | 0) >> 2] | 0;
     if ($4) {
      continue label$17
     }
     break label$17;
    };
   }
   label$18 : {
    label$19 : {
     $5 = HEAP32[$1 >> 2] | 0;
     if (!$5) {
      break label$19
     }
     $4 = $5;
     label$20 : while (1) {
      $7 = $7 + -1 | 0;
      $4 = HEAP32[($4 + 4 | 0) >> 2] | 0;
      if ($4) {
       continue label$20
      }
      break label$20;
     };
     HEAP32[($2 + 12 | 0) >> 2] = $7;
     $3 = join234_internal($3 | 0, $8 | 0, $5 | 0, $2 + 12 | 0 | 0) | 0;
     break label$18;
    }
    HEAP32[($2 + 12 | 0) >> 2] = $7;
    $3 = join234_internal($3 | 0, $8 | 0, 0 | 0, $2 + 12 | 0 | 0) | 0;
   }
   HEAP32[$1 >> 2] = $3;
   HEAP32[$0 >> 2] = 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $1 | 0;
 }
 
 function splitpos234($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $5 = 0, $20 = 0, $23 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $8 = 0, $9 = 0, i64toi32_i32$2 = 0, $11 = 0, $12 = 0, $6 = 0, $21 = 0, $27 = 0, $24 = 0, $13 = 0, $3 = 0, $7 = 0, $14 = 0, $25 = 0, $22 = 0, $15 = 0, $28 = 0, $10 = 0, $26 = 0, $28$hi = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $405 = 0, $412 = 0, $517 = 0, $586 = 0, $593 = 0, $646 = 0, $648 = 0, $721 = 0, $725 = 0, $735 = 0, $739 = 0, $747 = 0, $749 = 0, $797 = 0, $807 = 0, $815 = 0, $817 = 0, $855 = 0, $866 = 0, $870 = 0, $881 = 0;
  $3 = 0;
  $4 = 0;
  label$1 : {
   $5 = HEAP32[$0 >> 2] | 0;
   if (!$5) {
    break label$1
   }
   $4 = ((((((HEAP32[($5 + 24 | 0) >> 2] | 0) + (HEAP32[($5 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($5 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($5 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($5 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($5 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($5 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
  }
  label$2 : {
   if (($1 | 0) < (0 | 0)) {
    break label$2
   }
   if (($4 | 0) < ($1 | 0)) {
    break label$2
   }
   $3 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
   HEAP32[$3 >> 2] = 0;
   HEAP32[($3 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0;
   HEAP32[(0 + 1104 | 0) >> 2] = $3 + 8 | 0;
   $6 = HEAP32[$0 >> 2] | 0;
   label$3 : {
    label$4 : {
     if ($1) {
      break label$4
     }
     $7 = $6;
     $6 = 0;
     break label$3;
    }
    label$5 : {
     label$6 : {
      if ($6) {
       break label$6
      }
      $5 = 0;
      break label$5;
     }
     $5 = ((((((HEAP32[($6 + 24 | 0) >> 2] | 0) + (HEAP32[($6 + 20 | 0) >> 2] | 0) | 0) + (HEAP32[($6 + 28 | 0) >> 2] | 0) | 0) + (HEAP32[($6 + 32 | 0) >> 2] | 0) | 0) + ((HEAP32[($6 + 36 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($6 + 40 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0) + ((HEAP32[($6 + 44 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    }
    label$7 : {
     label$8 : {
      label$9 : {
       if (($5 | 0) == ($1 | 0)) {
        break label$9
       }
       $7 = 0;
       $8 = 0;
       $9 = 0;
       $10 = -1;
       $11 = 0;
       $12 = 0;
       $13 = $1;
       label$10 : while (1) {
        $4 = $6;
        $14 = HEAP32[($4 + 24 | 0) >> 2] | 0;
        $15 = HEAP32[($4 + 28 | 0) >> 2] | 0;
        $16 = HEAP32[($4 + 32 | 0) >> 2] | 0;
        $17 = HEAP32[($4 + 36 | 0) >> 2] | 0;
        $18 = HEAP32[($4 + 40 | 0) >> 2] | 0;
        $19 = HEAP32[($4 + 44 | 0) >> 2] | 0;
        $20 = 0;
        label$11 : {
         label$12 : {
          label$13 : {
           $21 = HEAP32[($4 + 20 | 0) >> 2] | 0;
           if (($21 | 0) >= ($1 | 0)) {
            break label$13
           }
           $20 = 1;
           $13 = $1 + ($21 ^ -1 | 0) | 0;
           if (($13 | 0) <= ($14 | 0)) {
            break label$13
           }
           $20 = 2;
           $13 = $13 + ($14 ^ -1 | 0) | 0;
           if (($13 | 0) <= ($15 | 0)) {
            break label$13
           }
           $5 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
           HEAP32[(0 + 1104 | 0) >> 2] = $5 + 48 | 0;
           $13 = $13 + ($15 ^ -1 | 0) | 0;
           $22 = $4 + 16 | 0;
           $6 = HEAP32[$22 >> 2] | 0;
           $20 = 3;
           break label$12;
          }
          $5 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
          HEAP32[(0 + 1104 | 0) >> 2] = $5 + 48 | 0;
          $23 = $4 + ($20 << 2 | 0) | 0;
          $22 = $23 + 4 | 0;
          $6 = HEAP32[$22 >> 2] | 0;
          $24 = $23 + 36 | 0;
          $23 = HEAP32[$24 >> 2] | 0;
          if (!$23) {
           break label$12
          }
          HEAP32[($5 + 36 | 0) >> 2] = $23;
          $23 = $20 + 1 | 0;
          $25 = $4 + ($23 << 2 | 0) | 0;
          $26 = $25 + 4 | 0;
          $27 = HEAP32[$26 >> 2] | 0;
          HEAP32[($5 + 8 | 0) >> 2] = $27;
          label$14 : {
           if (!$27) {
            break label$14
           }
           HEAP32[$27 >> 2] = $5;
          }
          $27 = $25 + 20 | 0;
          HEAP32[($5 + 24 | 0) >> 2] = HEAP32[$27 >> 2] | 0;
          HEAP32[$24 >> 2] = 0;
          HEAP32[$26 >> 2] = 0;
          HEAP32[$27 >> 2] = 0;
          break label$11;
         }
         HEAP32[($5 + 36 | 0) >> 2] = 0;
         HEAP32[($5 + 24 | 0) >> 2] = 0;
         HEAP32[($5 + 8 | 0) >> 2] = 0;
         $23 = $20 + 1 | 0;
        }
        label$15 : {
         label$16 : {
          if ($23 >>> 0 >= 3 >>> 0) {
           break label$16
          }
          $27 = ($4 + ($23 << 2 | 0) | 0) + 36 | 0;
          $24 = HEAP32[$27 >> 2] | 0;
          if (!$24) {
           break label$16
          }
          HEAP32[($5 + 40 | 0) >> 2] = $24;
          $24 = $4 + (($23 + 1 | 0) << 2 | 0) | 0;
          $25 = $24 + 4 | 0;
          $23 = HEAP32[$25 >> 2] | 0;
          HEAP32[($5 + 12 | 0) >> 2] = $23;
          label$17 : {
           if (!$23) {
            break label$17
           }
           HEAP32[$23 >> 2] = $5;
          }
          HEAP32[$27 >> 2] = 0;
          HEAP32[$25 >> 2] = 0;
          $23 = $24 + 20 | 0;
          HEAP32[($5 + 28 | 0) >> 2] = HEAP32[$23 >> 2] | 0;
          break label$15;
         }
         HEAP32[($5 + 12 | 0) >> 2] = 0;
         HEAP32[($5 + 40 | 0) >> 2] = 0;
         $23 = $5 + 28 | 0;
        }
        HEAP32[$23 >> 2] = 0;
        label$18 : {
         label$19 : {
          if (($21 | 0) < ($1 | 0)) {
           break label$19
          }
          $23 = HEAP32[($4 + 44 | 0) >> 2] | 0;
          if (!$23) {
           break label$19
          }
          HEAP32[($5 + 44 | 0) >> 2] = $23;
          $27 = $4 + (($20 + 3 | 0) << 2 | 0) | 0;
          $24 = $27 + 4 | 0;
          $23 = HEAP32[$24 >> 2] | 0;
          HEAP32[($5 + 16 | 0) >> 2] = $23;
          label$20 : {
           if (!$23) {
            break label$20
           }
           HEAP32[$23 >> 2] = $5;
          }
          HEAP32[($4 + 44 | 0) >> 2] = 0;
          HEAP32[$24 >> 2] = 0;
          $23 = $27 + 20 | 0;
          HEAP32[($5 + 32 | 0) >> 2] = HEAP32[$23 >> 2] | 0;
          break label$18;
         }
         HEAP32[($5 + 16 | 0) >> 2] = 0;
         HEAP32[($5 + 44 | 0) >> 2] = 0;
         $23 = $5 + 32 | 0;
        }
        HEAP32[$23 >> 2] = 0;
        label$21 : {
         label$22 : {
          if (!$12) {
           break label$22
          }
          $23 = $12 + ($10 << 2 | 0) | 0;
          HEAP32[($23 + 4 | 0) >> 2] = $4;
          HEAP32[($23 + 20 | 0) >> 2] = $1;
          HEAP32[$4 >> 2] = $12;
          HEAP32[($11 + 20 | 0) >> 2] = (((((($21 - $1 | 0) + $14 | 0) + $15 | 0) + $16 | 0) + (($17 | 0) != (0 | 0)) | 0) + (($18 | 0) != (0 | 0)) | 0) + (($19 | 0) != (0 | 0)) | 0;
          HEAP32[($11 + 4 | 0) >> 2] = $5;
          break label$21;
         }
         $11 = 0;
         HEAP32[$4 >> 2] = 0;
         $7 = $5;
         $8 = $5;
         $9 = $4;
        }
        HEAP32[$5 >> 2] = $11;
        $1 = $13;
        $10 = $20;
        $11 = $5;
        $12 = $4;
        if ($6) {
         continue label$10
        }
        break label$10;
       };
       $6 = 0;
       HEAP32[($5 + 4 | 0) >> 2] = 0;
       HEAP32[($5 + 20 | 0) >> 2] = 0;
       HEAP32[$22 >> 2] = 0;
       HEAP32[(($4 + ($20 << 2 | 0) | 0) + 20 | 0) >> 2] = 0;
       if (!$9) {
        break label$8
       }
       label$23 : while (1) {
        label$24 : {
         if (!(HEAP32[($9 + 36 | 0) >> 2] | 0)) {
          break label$24
         }
         $6 = $9;
         label$25 : while (1) {
          $4 = 2;
          label$26 : {
           $5 = HEAP32[($9 + 16 | 0) >> 2] | 0;
           if ($5) {
            break label$26
           }
           $4 = HEAP32[($9 + 12 | 0) >> 2] | 0 ? 2 : 1;
           $5 = HEAP32[(($9 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
           if (!$5) {
            break label$8
           }
           $4 = $4 + -1 | 0;
          }
          label$27 : {
           label$28 : {
            $1 = HEAP32[($5 + 40 | 0) >> 2] | 0;
            if ($1) {
             break label$28
            }
            label$29 : {
             label$30 : {
              label$31 : {
               $21 = $4 << 2 | 0;
               $12 = $9 + $21 | 0;
               $11 = $12 + 4 | 0;
               $20 = HEAP32[$11 >> 2] | 0;
               if (!(HEAP32[($20 + 40 | 0) >> 2] | 0)) {
                break label$31
               }
               $23 = HEAP32[($5 + 36 | 0) >> 2] | 0;
               if ($23) {
                break label$29
               }
               if (HEAP32[($20 + 44 | 0) >> 2] | 0) {
                break label$30
               }
              }
              trans234_subtree_merge($9 | 0, $4 | 0, 0 | 0, 0 | 0);
              $5 = HEAP32[$11 >> 2] | 0;
              label$32 : {
               if (!(HEAP32[($9 + 36 | 0) >> 2] | 0)) {
                break label$32
               }
               $9 = $5;
               break label$27;
              }
              HEAP32[$5 >> 2] = 0;
              $6 = $5;
              $9 = $5;
              break label$27;
             }
             HEAP32[($5 + 40 | 0) >> 2] = $23;
             HEAP32[($5 + 44 | 0) >> 2] = $1;
             $1 = HEAP32[($5 + 28 | 0) >> 2] | 0;
             i64toi32_i32$2 = $5;
             i64toi32_i32$0 = HEAP32[($5 + 20 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[($5 + 24 | 0) >> 2] | 0;
             $405 = i64toi32_i32$0;
             i64toi32_i32$0 = $5 + 24 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $405;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
             $21 = HEAP32[($5 + 12 | 0) >> 2] | 0;
             i64toi32_i32$2 = $5;
             i64toi32_i32$1 = HEAP32[($5 + 4 | 0) >> 2] | 0;
             i64toi32_i32$0 = HEAP32[($5 + 8 | 0) >> 2] | 0;
             $412 = i64toi32_i32$1;
             i64toi32_i32$1 = $5 + 8 | 0;
             HEAP32[i64toi32_i32$1 >> 2] = $412;
             HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
             HEAP32[($5 + 16 | 0) >> 2] = $21;
             HEAP32[($5 + 32 | 0) >> 2] = $1;
             $21 = 2;
             $23 = $4 + 1 | 0;
             $1 = $9 + ($23 << 2 | 0) | 0;
             label$33 : {
              if (HEAP32[($20 + 44 | 0) >> 2] | 0) {
               break label$33
              }
              $21 = (HEAP32[($20 + 40 | 0) >> 2] | 0 | 0) != (0 | 0);
             }
             $14 = $1 + 4 | 0;
             $1 = $12 + 36 | 0;
             HEAP32[($5 + 36 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
             $20 = ($21 << 2 | 0) + $20 | 0;
             $12 = $20 + 36 | 0;
             HEAP32[$1 >> 2] = HEAP32[$12 >> 2] | 0;
             HEAP32[$12 >> 2] = 0;
             $12 = $20 + 8 | 0;
             HEAP32[($5 + 4 | 0) >> 2] = HEAP32[$12 >> 2] | 0;
             $20 = $20 + 24 | 0;
             HEAP32[($5 + 20 | 0) >> 2] = HEAP32[$20 >> 2] | 0;
             HEAP32[$12 >> 2] = 0;
             HEAP32[$20 >> 2] = 0;
             label$34 : {
              $20 = HEAP32[($5 + 4 | 0) >> 2] | 0;
              if (!$20) {
               break label$34
              }
              HEAP32[$20 >> 2] = $5;
             }
             $12 = 2;
             $9 = $9 + 20 | 0;
             $20 = $9 + ($4 << 2 | 0) | 0;
             $4 = (HEAP32[($5 + 20 | 0) >> 2] | 0) + 1 | 0;
             HEAP32[$20 >> 2] = (HEAP32[$20 >> 2] | 0) - $4 | 0;
             $9 = $9 + ($23 << 2 | 0) | 0;
             HEAP32[$9 >> 2] = (HEAP32[$9 >> 2] | 0) + $4 | 0;
             $11 = HEAP32[$11 >> 2] | 0;
             $4 = HEAP32[$14 >> 2] | 0;
             $21 = $4 + 12 | 0;
             HEAP32[($4 + 16 | 0) >> 2] = HEAP32[$21 >> 2] | 0;
             HEAP32[($4 + 32 | 0) >> 2] = HEAP32[($4 + 28 | 0) >> 2] | 0;
             $23 = $4 + 8 | 0;
             HEAP32[$21 >> 2] = HEAP32[$23 >> 2] | 0;
             $21 = $4 + 40 | 0;
             HEAP32[($4 + 44 | 0) >> 2] = HEAP32[$21 >> 2] | 0;
             i64toi32_i32$2 = $4;
             i64toi32_i32$0 = HEAP32[($4 + 20 | 0) >> 2] | 0;
             i64toi32_i32$1 = HEAP32[($4 + 24 | 0) >> 2] | 0;
             $517 = i64toi32_i32$0;
             i64toi32_i32$0 = $4 + 24 | 0;
             HEAP32[i64toi32_i32$0 >> 2] = $517;
             HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
             HEAP32[$21 >> 2] = HEAP32[($4 + 36 | 0) >> 2] | 0;
             HEAP32[$23 >> 2] = HEAP32[($4 + 4 | 0) >> 2] | 0;
             label$35 : {
              if (HEAP32[($11 + 44 | 0) >> 2] | 0) {
               break label$35
              }
              $12 = (HEAP32[($11 + 40 | 0) >> 2] | 0 | 0) != (0 | 0);
             }
             HEAP32[($4 + 36 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
             $11 = ($12 << 2 | 0) + $11 | 0;
             $12 = $11 + 36 | 0;
             HEAP32[$1 >> 2] = HEAP32[$12 >> 2] | 0;
             HEAP32[$12 >> 2] = 0;
             $1 = $11 + 8 | 0;
             HEAP32[($4 + 4 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
             $11 = $11 + 24 | 0;
             HEAP32[($4 + 20 | 0) >> 2] = HEAP32[$11 >> 2] | 0;
             HEAP32[$1 >> 2] = 0;
             HEAP32[$11 >> 2] = 0;
             label$36 : {
              $1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
              if (!$1) {
               break label$36
              }
              HEAP32[$1 >> 2] = $4;
             }
             $4 = (HEAP32[($4 + 20 | 0) >> 2] | 0) + 1 | 0;
             HEAP32[$20 >> 2] = (HEAP32[$20 >> 2] | 0) - $4 | 0;
             HEAP32[$9 >> 2] = (HEAP32[$9 >> 2] | 0) + $4 | 0;
             break label$28;
            }
            HEAP32[($5 + 40 | 0) >> 2] = $23;
            HEAP32[($5 + 44 | 0) >> 2] = $1;
            $1 = HEAP32[($5 + 28 | 0) >> 2] | 0;
            i64toi32_i32$2 = $5;
            i64toi32_i32$1 = HEAP32[($5 + 20 | 0) >> 2] | 0;
            i64toi32_i32$0 = HEAP32[($5 + 24 | 0) >> 2] | 0;
            $586 = i64toi32_i32$1;
            i64toi32_i32$1 = $5 + 24 | 0;
            HEAP32[i64toi32_i32$1 >> 2] = $586;
            HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
            $11 = HEAP32[($5 + 12 | 0) >> 2] | 0;
            i64toi32_i32$2 = $5;
            i64toi32_i32$0 = HEAP32[($5 + 4 | 0) >> 2] | 0;
            i64toi32_i32$1 = HEAP32[($5 + 8 | 0) >> 2] | 0;
            $593 = i64toi32_i32$0;
            i64toi32_i32$0 = $5 + 8 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $593;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
            HEAP32[($5 + 16 | 0) >> 2] = $11;
            HEAP32[($5 + 32 | 0) >> 2] = $1;
            $1 = 2;
            label$37 : {
             if (HEAP32[($20 + 44 | 0) >> 2] | 0) {
              break label$37
             }
             $1 = (HEAP32[($20 + 40 | 0) >> 2] | 0 | 0) != (0 | 0);
            }
            $11 = $4 + 1 | 0;
            $12 = $12 + 36 | 0;
            HEAP32[($5 + 36 | 0) >> 2] = HEAP32[$12 >> 2] | 0;
            $4 = ($1 << 2 | 0) + $20 | 0;
            $1 = $4 + 36 | 0;
            HEAP32[$12 >> 2] = HEAP32[$1 >> 2] | 0;
            HEAP32[$1 >> 2] = 0;
            $1 = $4 + 8 | 0;
            HEAP32[($5 + 4 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
            $4 = $4 + 24 | 0;
            HEAP32[($5 + 20 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
            HEAP32[$1 >> 2] = 0;
            HEAP32[$4 >> 2] = 0;
            label$38 : {
             $4 = HEAP32[($5 + 4 | 0) >> 2] | 0;
             if (!$4) {
              break label$38
             }
             HEAP32[$4 >> 2] = $5;
            }
            $4 = $9 + 20 | 0;
            $1 = $4 + $21 | 0;
            $646 = $1;
            $648 = HEAP32[$1 >> 2] | 0;
            $1 = (HEAP32[($5 + 20 | 0) >> 2] | 0) + 1 | 0;
            HEAP32[$646 >> 2] = $648 - $1 | 0;
            $4 = $4 + ($11 << 2 | 0) | 0;
            HEAP32[$4 >> 2] = (HEAP32[$4 >> 2] | 0) + $1 | 0;
           }
           $9 = $5;
          }
          if ($9) {
           continue label$25
          }
          break label$8;
         };
        }
        $9 = HEAP32[($9 + 4 | 0) >> 2] | 0;
        HEAP32[$9 >> 2] = 0;
        continue label$23;
       };
      }
      $7 = 0;
      break label$7;
     }
     if (!$8) {
      break label$7
     }
     label$39 : {
      if (HEAP32[($8 + 36 | 0) >> 2] | 0) {
       break label$39
      }
      label$40 : while (1) {
       $8 = HEAP32[($8 + 4 | 0) >> 2] | 0;
       HEAP32[$8 >> 2] = 0;
       if (!(HEAP32[($8 + 36 | 0) >> 2] | 0)) {
        continue label$40
       }
       break label$40;
      };
      $7 = $8;
     }
     label$41 : while (1) {
      $5 = HEAP32[($8 + 4 | 0) >> 2] | 0;
      if (!$5) {
       break label$7
      }
      label$42 : {
       if (!(HEAP32[($5 + 40 | 0) >> 2] | 0)) {
        break label$42
       }
       $8 = $5;
       if ($5) {
        continue label$41
       }
       break label$7;
      }
      label$43 : {
       $4 = HEAP32[($8 + 8 | 0) >> 2] | 0;
       if (!(HEAP32[($4 + 40 | 0) >> 2] | 0)) {
        break label$43
       }
       label$44 : {
        if (!(HEAP32[($5 + 36 | 0) >> 2] | 0)) {
         break label$44
        }
        HEAP32[($5 + 40 | 0) >> 2] = HEAP32[($8 + 36 | 0) >> 2] | 0;
        HEAP32[($8 + 36 | 0) >> 2] = HEAP32[($4 + 36 | 0) >> 2] | 0;
        HEAP32[($5 + 28 | 0) >> 2] = HEAP32[($4 + 20 | 0) >> 2] | 0;
        $1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
        HEAP32[($5 + 12 | 0) >> 2] = $1;
        label$45 : {
         if (!$1) {
          break label$45
         }
         HEAP32[$1 >> 2] = $5;
        }
        i64toi32_i32$2 = $4 + 8 | 0;
        i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $721 = i64toi32_i32$1;
        i64toi32_i32$1 = $4;
        HEAP32[($4 + 4 | 0) >> 2] = $721;
        HEAP32[($4 + 8 | 0) >> 2] = i64toi32_i32$0;
        i64toi32_i32$2 = $4 + 24 | 0;
        i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
        i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
        $725 = i64toi32_i32$0;
        i64toi32_i32$0 = $4;
        HEAP32[($4 + 20 | 0) >> 2] = $725;
        HEAP32[($4 + 24 | 0) >> 2] = i64toi32_i32$1;
        $1 = $4 + 32 | 0;
        HEAP32[($4 + 28 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
        HEAP32[$1 >> 2] = 0;
        i64toi32_i32$2 = $4;
        i64toi32_i32$1 = HEAP32[($4 + 40 | 0) >> 2] | 0;
        i64toi32_i32$0 = HEAP32[($4 + 44 | 0) >> 2] | 0;
        $735 = i64toi32_i32$1;
        i64toi32_i32$1 = $4;
        HEAP32[($4 + 36 | 0) >> 2] = $735;
        HEAP32[($4 + 40 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[($4 + 44 | 0) >> 2] = 0;
        $739 = $4 + 12 | 0;
        $4 = $4 + 16 | 0;
        HEAP32[$739 >> 2] = HEAP32[$4 >> 2] | 0;
        HEAP32[$4 >> 2] = 0;
        $4 = $8 + 24 | 0;
        $747 = $4;
        $749 = HEAP32[$4 >> 2] | 0;
        $4 = (HEAP32[($5 + 28 | 0) >> 2] | 0) + 1 | 0;
        HEAP32[$747 >> 2] = $749 - $4 | 0;
        HEAP32[($8 + 20 | 0) >> 2] = (HEAP32[($8 + 20 | 0) >> 2] | 0) + $4 | 0;
        $8 = $5;
        if ($5) {
         continue label$41
        }
        break label$7;
       }
       if (!(HEAP32[($4 + 44 | 0) >> 2] | 0)) {
        break label$43
       }
       HEAP32[($5 + 36 | 0) >> 2] = HEAP32[($8 + 36 | 0) >> 2] | 0;
       HEAP32[($8 + 36 | 0) >> 2] = HEAP32[($4 + 36 | 0) >> 2] | 0;
       HEAP32[($5 + 24 | 0) >> 2] = HEAP32[($4 + 20 | 0) >> 2] | 0;
       $1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       HEAP32[($5 + 8 | 0) >> 2] = $1;
       label$46 : {
        if (!$1) {
         break label$46
        }
        HEAP32[$1 >> 2] = $5;
       }
       i64toi32_i32$2 = $4 + 24 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $28 = i64toi32_i32$0;
       $28$hi = i64toi32_i32$1;
       $1 = $4 + 32 | 0;
       HEAP32[($4 + 28 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
       i64toi32_i32$2 = $4 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $797 = i64toi32_i32$1;
       i64toi32_i32$1 = $4;
       HEAP32[($4 + 4 | 0) >> 2] = $797;
       HEAP32[($4 + 8 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$0 = $28$hi;
       i64toi32_i32$1 = $4;
       HEAP32[($4 + 20 | 0) >> 2] = $28;
       HEAP32[($4 + 24 | 0) >> 2] = i64toi32_i32$0;
       HEAP32[$1 >> 2] = 0;
       i64toi32_i32$2 = $4;
       i64toi32_i32$0 = HEAP32[($4 + 40 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($4 + 44 | 0) >> 2] | 0;
       $28 = i64toi32_i32$0;
       $28$hi = i64toi32_i32$1;
       HEAP32[($4 + 44 | 0) >> 2] = 0;
       i64toi32_i32$0 = $4;
       HEAP32[($4 + 36 | 0) >> 2] = $28;
       HEAP32[($4 + 40 | 0) >> 2] = i64toi32_i32$1;
       $807 = $4 + 12 | 0;
       $4 = $4 + 16 | 0;
       HEAP32[$807 >> 2] = HEAP32[$4 >> 2] | 0;
       HEAP32[$4 >> 2] = 0;
       $4 = $8 + 24 | 0;
       $815 = $4;
       $817 = HEAP32[$4 >> 2] | 0;
       $4 = (HEAP32[($5 + 24 | 0) >> 2] | 0) + 1 | 0;
       HEAP32[$815 >> 2] = $817 - $4 | 0;
       HEAP32[($8 + 20 | 0) >> 2] = (HEAP32[($8 + 20 | 0) >> 2] | 0) + $4 | 0;
       $4 = HEAP32[($8 + 8 | 0) >> 2] | 0;
       $20 = 2;
       label$47 : {
        $1 = HEAP32[($8 + 4 | 0) >> 2] | 0;
        if (HEAP32[($1 + 40 | 0) >> 2] | 0) {
         break label$47
        }
        $20 = (HEAP32[($1 + 36 | 0) >> 2] | 0 | 0) != (0 | 0);
       }
       $20 = ($20 << 2 | 0) + $1 | 0;
       HEAP32[($20 + 36 | 0) >> 2] = HEAP32[($8 + 36 | 0) >> 2] | 0;
       HEAP32[($8 + 36 | 0) >> 2] = HEAP32[($4 + 36 | 0) >> 2] | 0;
       $9 = $20 + 24 | 0;
       HEAP32[$9 >> 2] = HEAP32[($4 + 20 | 0) >> 2] | 0;
       $855 = $20 + 8 | 0;
       $20 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       HEAP32[$855 >> 2] = $20;
       label$48 : {
        if (!$20) {
         break label$48
        }
        HEAP32[$20 >> 2] = $1;
       }
       i64toi32_i32$2 = $4 + 8 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $866 = i64toi32_i32$1;
       i64toi32_i32$1 = $4;
       HEAP32[($4 + 4 | 0) >> 2] = $866;
       HEAP32[($4 + 8 | 0) >> 2] = i64toi32_i32$0;
       i64toi32_i32$2 = $4 + 24 | 0;
       i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $870 = i64toi32_i32$0;
       i64toi32_i32$0 = $4;
       HEAP32[($4 + 20 | 0) >> 2] = $870;
       HEAP32[($4 + 24 | 0) >> 2] = i64toi32_i32$1;
       $1 = $4 + 32 | 0;
       HEAP32[($4 + 28 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
       HEAP32[$1 >> 2] = 0;
       i64toi32_i32$2 = $4 + 40 | 0;
       i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
       i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
       $881 = i64toi32_i32$1;
       i64toi32_i32$1 = $4;
       HEAP32[($4 + 36 | 0) >> 2] = $881;
       HEAP32[($4 + 40 | 0) >> 2] = i64toi32_i32$0;
       $1 = $4 + 16 | 0;
       HEAP32[($4 + 12 | 0) >> 2] = HEAP32[$1 >> 2] | 0;
       HEAP32[($4 + 44 | 0) >> 2] = 0;
       HEAP32[$1 >> 2] = 0;
       $4 = (HEAP32[$9 >> 2] | 0) + 1 | 0;
       HEAP32[($8 + 24 | 0) >> 2] = (HEAP32[($8 + 24 | 0) >> 2] | 0) - $4 | 0;
       HEAP32[($8 + 20 | 0) >> 2] = (HEAP32[($8 + 20 | 0) >> 2] | 0) + $4 | 0;
       $8 = $5;
       if ($5) {
        continue label$41
       }
       break label$7;
      }
      trans234_subtree_merge($8 | 0, 0 | 0, 0 | 0, 0 | 0);
      $5 = HEAP32[($8 + 4 | 0) >> 2] | 0;
      label$49 : {
       if (HEAP32[($8 + 36 | 0) >> 2] | 0) {
        break label$49
       }
       HEAP32[$5 >> 2] = 0;
       $7 = $5;
      }
      $8 = $5;
      if ($5) {
       continue label$41
      }
      break label$41;
     };
    }
    HEAP32[$0 >> 2] = $7;
   }
   $5 = $3;
   label$50 : {
    if ($2) {
     break label$50
    }
    HEAP32[$3 >> 2] = $7;
    $5 = $0;
   }
   HEAP32[$5 >> 2] = $6;
  }
  return $3 | 0;
 }
 
 function split234($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $5 = 0, $6 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  $5 = 1;
  label$1 : {
   label$2 : {
    $6 = $3 + -3 | 0;
    if (!(findrelpos234($0 | 0, $1 | 0, $2 | 0, ($6 >>> 0 < 2 >>> 0 ? (($3 | 0) == (3 | 0) ? 2 : 1) : $3) | 0, $4 + 12 | 0 | 0) | 0)) {
     break label$2
    }
    $5 = (HEAP32[($4 + 12 | 0) >> 2] | 0) + 1 | 0;
    break label$1;
   }
   HEAP32[($4 + 12 | 0) >> 2] = 0;
  }
  $3 = splitpos234($0 | 0, $5 | 0, $6 >>> 0 < 2 >>> 0 | 0) | 0;
  __stack_pointer = $4 + 16 | 0;
  return $3 | 0;
 }
 
 function copytree234($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0;
  $3 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[$3 >> 2] = 0;
  HEAP32[($3 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $3 + 8 | 0;
  $4 = $3;
  label$1 : {
   $0 = HEAP32[$0 >> 2] | 0;
   if (!$0) {
    break label$1
   }
   $4 = copynode234($0 | 0, $1 | 0, $2 | 0) | 0;
   HEAP32[$3 >> 2] = $4;
  }
  HEAP32[$4 >> 2] = 0;
  return $3 | 0;
 }
 
 function copynode234($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3 = 0;
  $4 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $4 + 48 | 0;
  label$1 : {
   label$2 : {
    if ($1) {
     break label$2
    }
    HEAP32[($4 + 36 | 0) >> 2] = HEAP32[($0 + 36 | 0) >> 2] | 0;
    HEAP32[($4 + 40 | 0) >> 2] = HEAP32[($0 + 40 | 0) >> 2] | 0;
    HEAP32[($4 + 44 | 0) >> 2] = HEAP32[($0 + 44 | 0) >> 2] | 0;
    break label$1;
   }
   label$3 : {
    $5 = HEAP32[($0 + 36 | 0) >> 2] | 0;
    if (!$5) {
     break label$3
    }
    $3 = FUNCTION_TABLE[$1 | 0]($2, $5) | 0;
   }
   HEAP32[($4 + 36 | 0) >> 2] = $3;
   label$4 : {
    label$5 : {
     $3 = HEAP32[($0 + 40 | 0) >> 2] | 0;
     if ($3) {
      break label$5
     }
     $3 = 0;
     break label$4;
    }
    $3 = FUNCTION_TABLE[$1 | 0]($2, $3) | 0;
   }
   HEAP32[($4 + 40 | 0) >> 2] = $3;
   label$6 : {
    $3 = HEAP32[($0 + 44 | 0) >> 2] | 0;
    if (!$3) {
     break label$6
    }
    (wasm2js_i32$0 = $4, wasm2js_i32$1 = FUNCTION_TABLE[$1 | 0]($2, $3) | 0), HEAP32[(wasm2js_i32$0 + 44 | 0) >> 2] = wasm2js_i32$1;
    break label$1;
   }
   HEAP32[($4 + 44 | 0) >> 2] = 0;
  }
  label$7 : {
   label$8 : {
    $3 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    if (!$3) {
     break label$8
    }
    $3 = copynode234($3 | 0, $1 | 0, $2 | 0) | 0;
    HEAP32[($4 + 4 | 0) >> 2] = $3;
    HEAP32[$3 >> 2] = $4;
    break label$7;
   }
   HEAP32[($4 + 4 | 0) >> 2] = 0;
  }
  HEAP32[($4 + 20 | 0) >> 2] = HEAP32[($0 + 20 | 0) >> 2] | 0;
  label$9 : {
   label$10 : {
    $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
    if (!$3) {
     break label$10
    }
    $3 = copynode234($3 | 0, $1 | 0, $2 | 0) | 0;
    HEAP32[($4 + 8 | 0) >> 2] = $3;
    HEAP32[$3 >> 2] = $4;
    break label$9;
   }
   HEAP32[($4 + 8 | 0) >> 2] = 0;
  }
  HEAP32[($4 + 24 | 0) >> 2] = HEAP32[($0 + 24 | 0) >> 2] | 0;
  label$11 : {
   label$12 : {
    $3 = HEAP32[($0 + 12 | 0) >> 2] | 0;
    if (!$3) {
     break label$12
    }
    $3 = copynode234($3 | 0, $1 | 0, $2 | 0) | 0;
    HEAP32[($4 + 12 | 0) >> 2] = $3;
    HEAP32[$3 >> 2] = $4;
    break label$11;
   }
   HEAP32[($4 + 12 | 0) >> 2] = 0;
  }
  HEAP32[($4 + 28 | 0) >> 2] = HEAP32[($0 + 28 | 0) >> 2] | 0;
  label$13 : {
   label$14 : {
    $3 = HEAP32[($0 + 16 | 0) >> 2] | 0;
    if (!$3) {
     break label$14
    }
    $1 = copynode234($3 | 0, $1 | 0, $2 | 0) | 0;
    HEAP32[($4 + 16 | 0) >> 2] = $1;
    HEAP32[$1 >> 2] = $4;
    break label$13;
   }
   HEAP32[($4 + 16 | 0) >> 2] = 0;
  }
  HEAP32[($4 + 32 | 0) >> 2] = HEAP32[($0 + 32 | 0) >> 2] | 0;
  return $4 | 0;
 }
 
 function legalstub$malloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $10 = 0, $3 = 0, $3$hi = 0, $6$hi = 0;
  i64toi32_i32$0 = 0;
  $3 = $0;
  $3$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $10 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $10 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $6$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $3$hi;
  i64toi32_i32$0 = $3;
  i64toi32_i32$2 = $6$hi;
  i64toi32_i32$3 = $10;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  return malloc(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 function legalstub$realloc($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $12 = 0, $3 = 0, $5 = 0, $5$hi = 0, $8$hi = 0;
  $3 = $0;
  i64toi32_i32$0 = 0;
  $5 = $1;
  $5$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $12 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $12 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $8$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $5$hi;
  i64toi32_i32$0 = $5;
  i64toi32_i32$2 = $8$hi;
  i64toi32_i32$3 = $12;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  return realloc($3 | 0, i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0) | 0 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = Table([null, xyd_cmp_nc, xyd_cmp]);
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__wasm_call_ctors": __wasm_call_ctors, 
  "dsf_init": dsf_init, 
  "snew_dsf": snew_dsf, 
  "smalloc": smalloc, 
  "edsf_canonify": edsf_canonify, 
  "edsf_merge": edsf_merge, 
  "dsf_canonify": dsf_canonify, 
  "dsf_merge": dsf_merge, 
  "dsf_size": dsf_size, 
  "findloop_new_state": findloop_new_state, 
  "findloop_free_state": findloop_free_state, 
  "sfree": sfree, 
  "findloop_is_loop_edge": findloop_is_loop_edge, 
  "findloop_is_bridge": findloop_is_bridge, 
  "findloop_run": findloop_run, 
  "shuffle": shuffle, 
  "new_game_desc": new_game_desc, 
  "memset": memset, 
  "newtree234": newtree234, 
  "add234": add234, 
  "count234": count234, 
  "delpos234": delpos234, 
  "find234": find234, 
  "del234": del234, 
  "freetree234": freetree234, 
  "srealloc": srealloc, 
  "qsort": qsort, 
  "sprig_params": {
   get value() {
    return global$1;
   }, 
   set value(_global$1) {
    global$1 = _global$1;
   }
  }, 
  "malloc": legalstub$malloc, 
  "free": free, 
  "realloc": legalstub$realloc, 
  "memcpy": memcpy, 
  "__heap_base": {
   get value() {
    return global$2;
   }, 
   set value(_global$2) {
    global$2 = _global$2;
   }
  }, 
  "bump_pointer": {
   get value() {
    return global$3;
   }, 
   set value(_global$3) {
    global$3 = _global$3;
   }
  }, 
  "addpos234": addpos234, 
  "index234": index234, 
  "findrelpos234": findrelpos234, 
  "findrel234": findrel234, 
  "findpos234": findpos234, 
  "join234": join234, 
  "join234r": join234r, 
  "splitpos234": splitpos234, 
  "split234": split234, 
  "copytree234": copytree234, 
  "__indirect_function_table": FUNCTION_TABLE, 
  "__dso_handle": {
   get value() {
    return global$4;
   }, 
   set value(_global$4) {
    global$4 = _global$4;
   }
  }, 
  "__data_end": {
   get value() {
    return global$5;
   }, 
   set value(_global$5) {
    global$5 = _global$5;
   }
  }, 
  "__global_base": {
   get value() {
    return global$6;
   }, 
   set value(_global$6) {
    global$6 = _global$6;
   }
  }, 
  "__memory_base": {
   get value() {
    return global$7;
   }, 
   set value(_global$7) {
    global$7 = _global$7;
   }
  }, 
  "__table_base": {
   get value() {
    return global$8;
   }, 
   set value(_global$8) {
    global$8 = _global$8;
   }
  }
 };
}

var retasmFunc = asmFunc({
});
export var memory = retasmFunc.memory;
export var __wasm_call_ctors = retasmFunc.__wasm_call_ctors;
export var dsf_init = retasmFunc.dsf_init;
export var snew_dsf = retasmFunc.snew_dsf;
export var smalloc = retasmFunc.smalloc;
export var edsf_canonify = retasmFunc.edsf_canonify;
export var edsf_merge = retasmFunc.edsf_merge;
export var dsf_canonify = retasmFunc.dsf_canonify;
export var dsf_merge = retasmFunc.dsf_merge;
export var dsf_size = retasmFunc.dsf_size;
export var findloop_new_state = retasmFunc.findloop_new_state;
export var findloop_free_state = retasmFunc.findloop_free_state;
export var sfree = retasmFunc.sfree;
export var findloop_is_loop_edge = retasmFunc.findloop_is_loop_edge;
export var findloop_is_bridge = retasmFunc.findloop_is_bridge;
export var findloop_run = retasmFunc.findloop_run;
export var shuffle = retasmFunc.shuffle;
export var new_game_desc = retasmFunc.new_game_desc;
export var memset = retasmFunc.memset;
export var newtree234 = retasmFunc.newtree234;
export var add234 = retasmFunc.add234;
export var count234 = retasmFunc.count234;
export var delpos234 = retasmFunc.delpos234;
export var find234 = retasmFunc.find234;
export var del234 = retasmFunc.del234;
export var freetree234 = retasmFunc.freetree234;
export var srealloc = retasmFunc.srealloc;
export var qsort = retasmFunc.qsort;
export var sprig_params = retasmFunc.sprig_params;
export var malloc = retasmFunc.malloc;
export var free = retasmFunc.free;
export var realloc = retasmFunc.realloc;
export var memcpy = retasmFunc.memcpy;
export var __heap_base = retasmFunc.__heap_base;
export var bump_pointer = retasmFunc.bump_pointer;
export var addpos234 = retasmFunc.addpos234;
export var index234 = retasmFunc.index234;
export var findrelpos234 = retasmFunc.findrelpos234;
export var findrel234 = retasmFunc.findrel234;
export var findpos234 = retasmFunc.findpos234;
export var join234 = retasmFunc.join234;
export var join234r = retasmFunc.join234r;
export var splitpos234 = retasmFunc.splitpos234;
export var split234 = retasmFunc.split234;
export var copytree234 = retasmFunc.copytree234;
export var __dso_handle = retasmFunc.__dso_handle;
export var __data_end = retasmFunc.__data_end;
export var __global_base = retasmFunc.__global_base;
export var __memory_base = retasmFunc.__memory_base;
export var __table_base = retasmFunc.__table_base;
