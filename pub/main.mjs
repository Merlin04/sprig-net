
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
 globalThis.c_buffer = buffer;
globalThis.HEAP8 = HEAP8;
globalThis.HEAP16 = HEAP16;
globalThis.HEAP32 = HEAP32;
globalThis.HEAPU8 = HEAPU8;
globalThis.HEAPU16 = HEAPU16;
globalThis.HEAPU32 = HEAPU32;
globalThis.HEAPF32 = HEAPF32;
globalThis.HEAPF64 = HEAPF64;
function __wasm_call_ctors() {
  
 }
 
 function undefined_weak_JS_random_upto(n) {
	return Math.floor(Math.random() * n);
}
 
 function dsf_init($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if (($1 | 0) < (1 | 0)) {
    break label$1
   }
   label$2 : while (1) {
    HEAP32[$0 >> 2] = 6;
    $0 = $0 + 4 | 0;
    $1 = $1 + -1 | 0;
    if ($1) {
     continue label$2
    }
    break label$2;
   };
  }
 }
 
 function snew_dsf($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $1 + ($0 << 2 | 0) | 0;
  label$1 : {
   if (($0 | 0) < (1 | 0)) {
    break label$1
   }
   $2 = $1;
   label$2 : while (1) {
    HEAP32[$2 >> 2] = 6;
    $2 = $2 + 4 | 0;
    $0 = $0 + -1 | 0;
    if ($0) {
     continue label$2
    }
    break label$2;
   };
  }
  return $1 | 0;
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
  var $4 = 0, $6 = 0, $7 = 0, $5 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  $1 = edsf_canonify($0 | 0, $1 | 0, $4 + 15 | 0 | 0) | 0;
  $5 = HEAPU8[($4 + 15 | 0) >> 0] | 0;
  label$1 : {
   label$2 : {
    $2 = edsf_canonify($0 | 0, $2 | 0, $4 + 14 | 0 | 0) | 0;
    if (($1 | 0) != ($2 | 0)) {
     break label$2
    }
    break label$1;
   }
   $6 = (($1 | 0) < ($2 | 0) ? $1 : $2) << 2 | 0;
   $7 = $0 + $6 | 0;
   $1 = ($1 | 0) > ($2 | 0) ? $1 : $2;
   $2 = $0 + ($1 << 2 | 0) | 0;
   HEAP32[$7 >> 2] = (HEAP32[$7 >> 2] | 0) + ((HEAP32[$2 >> 2] | 0) & -4 | 0) | 0;
   HEAP32[$2 >> 2] = ($5 ^ $3 | 0) ^ (HEAPU8[($4 + 14 | 0) >> 0] | 0) | 0 | $6 | 0;
  }
  edsf_canonify($0 | 0, $1 | 0, $4 + 14 | 0 | 0) | 0;
  __stack_pointer = $4 + 16 | 0;
 }
 
 function dsf_canonify($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return edsf_canonify($0 | 0, $1 | 0, 0 | 0) | 0 | 0;
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
  return (HEAP32[($0 + ((edsf_canonify($0 | 0, $1 | 0, 0 | 0) | 0) << 2 | 0) | 0) >> 2] | 0) >> 2 | 0 | 0;
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
  $5 = 1;
  label$1 : {
   if (findloop_is_bridge_oneway($0 | 0, $1 | 0, $2 | 0, $3 | 0, $4 | 0) | 0) {
    break label$1
   }
   $5 = findloop_is_bridge_oneway($0 | 0, $2 | 0, $1 | 0, $4 | 0, $3 | 0) | 0;
  }
  return $5 | 0;
 }
 
 function findloop_is_bridge_oneway($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0;
  label$1 : {
   $1 = $0 + Math_imul($1, 44) | 0;
   $5 = HEAP32[($1 + 40 | 0) >> 2] | 0;
   if (($5 | 0) != ($2 | 0)) {
    break label$1
   }
   $6 = (HEAP32[($1 + 28 | 0) >> 2] | 0) - (HEAP32[($1 + 24 | 0) >> 2] | 0) | 0;
   $0 = $0 + Math_imul(HEAP32[($1 + 12 | 0) >> 2] | 0, 44) | 0;
   $1 = HEAP32[($0 + 24 | 0) >> 2] | 0;
   $0 = HEAP32[($0 + 28 | 0) >> 2] | 0;
   label$2 : {
    if (!$3) {
     break label$2
    }
    HEAP32[$3 >> 2] = $6 + 1 | 0;
   }
   if (!$4) {
    break label$1
   }
   HEAP32[$4 >> 2] = ($0 - $1 | 0) - $6 | 0;
  }
  return ($5 | 0) == ($2 | 0) | 0;
 }
 
 function findloop_run($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $6 = 0, $5 = 0, $9 = 0, $8 = 0, $12 = 0, $10 = 0, $11 = 0, $4 = 0, $7 = 0, i64toi32_i32$1 = 0;
  $4 = 0;
  label$1 : {
   label$2 : {
    if (($1 | 0) < (0 | 0)) {
     break label$2
    }
    $5 = -1;
    $6 = $0;
    label$3 : while (1) {
     HEAP32[$6 >> 2] = $1;
     HEAP8[($6 + 16 | 0) >> 0] = 0;
     i64toi32_i32$1 = $6 + 4 | 0;
     HEAP32[i64toi32_i32$1 >> 2] = -2;
     HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = -1;
     $6 = $6 + 44 | 0;
     $5 = $5 + 1 | 0;
     if (($1 | 0) != ($5 | 0)) {
      continue label$3
     }
     break label$3;
    };
    $6 = $0 + Math_imul($1, 44) | 0;
    HEAP32[($6 + 4 | 0) >> 2] = -1;
    $7 = $6 + 4 | 0;
    label$4 : {
     if (($1 | 0) >= (1 | 0)) {
      break label$4
     }
     $4 = 0;
     $8 = 0;
     break label$1;
    }
    $4 = 0;
    $8 = 0;
    label$5 : while (1) {
     label$6 : {
      $6 = $0 + Math_imul($8, 44) | 0;
      if ((HEAP32[$6 >> 2] | 0 | 0) != ($1 | 0)) {
       break label$6
      }
      $5 = HEAP32[$7 >> 2] | 0;
      HEAP32[$7 >> 2] = $8;
      HEAP32[($6 + 8 | 0) >> 2] = $5;
      HEAP32[($6 + 12 | 0) >> 2] = $8;
      $6 = $8;
      label$7 : while (1) {
       label$8 : {
        $9 = $6;
        $10 = $0 + Math_imul($6, 44) | 0;
        if (HEAPU8[($10 + 16 | 0) >> 0] | 0) {
         break label$8
        }
        HEAP8[($10 + 16 | 0) >> 0] = 1;
        label$9 : {
         $6 = FUNCTION_TABLE[$2 | 0]($9, $3) | 0;
         if (($6 | 0) < (0 | 0)) {
          break label$9
         }
         $11 = $10 + 12 | 0;
         $12 = $10 + 4 | 0;
         label$10 : while (1) {
          label$11 : {
           $5 = $0 + Math_imul($6, 44) | 0;
           if ((HEAP32[($5 + 4 | 0) >> 2] | 0 | 0) != (-2 | 0)) {
            break label$11
           }
           HEAP32[($5 + 4 | 0) >> 2] = -1;
           HEAP32[($5 + 8 | 0) >> 2] = HEAP32[$12 >> 2] | 0;
           HEAP32[$5 >> 2] = $9;
           HEAP32[($5 + 12 | 0) >> 2] = HEAP32[$11 >> 2] | 0;
           HEAP32[$12 >> 2] = $6;
          }
          $4 = $4 + (($6 | 0) > ($9 | 0)) | 0;
          $5 = FUNCTION_TABLE[$2 | 0](-1, $3) | 0;
          $6 = $5;
          if (($5 | 0) > (-1 | 0)) {
           continue label$10
          }
          break label$10;
         };
        }
        $6 = HEAP32[($10 + 4 | 0) >> 2] | 0;
        if (($6 | 0) > (-1 | 0)) {
         continue label$7
        }
       }
       if (($9 | 0) == ($8 | 0)) {
        break label$6
       }
       $6 = HEAP32[($10 + 8 | 0) >> 2] | 0;
       if (($6 | 0) > (-1 | 0)) {
        continue label$7
       }
       $6 = HEAP32[$10 >> 2] | 0;
       continue label$7;
      };
     }
     $8 = $8 + 1 | 0;
     if (($8 | 0) != ($1 | 0)) {
      continue label$5
     }
     break label$5;
    };
    $6 = $0 + 16 | 0;
    $5 = $1;
    label$12 : while (1) {
     HEAP8[$6 >> 0] = 0;
     $6 = $6 + 44 | 0;
     $5 = $5 + -1 | 0;
     if ($5) {
      continue label$12
     }
     break label$12;
    };
    $8 = 1;
    break label$1;
   }
   $6 = $0 + Math_imul($1, 44) | 0;
   HEAP32[($6 + 4 | 0) >> 2] = -1;
   $7 = $6 + 4 | 0;
   $8 = 0;
  }
  $6 = $0 + Math_imul($1, 44) | 0;
  HEAP8[($6 + 16 | 0) >> 0] = 1;
  $10 = $6 + 16 | 0;
  $12 = 0;
  $6 = HEAP32[$7 >> 2] | 0;
  $9 = $6;
  label$13 : while (1) {
   label$14 : {
    $11 = $9;
    $5 = $0 + Math_imul($9, 44) | 0;
    if (HEAPU8[($5 + 16 | 0) >> 0] | 0) {
     break label$14
    }
    HEAP8[($5 + 16 | 0) >> 0] = 1;
    HEAP32[($5 + 24 | 0) >> 2] = $12;
    HEAP32[($5 + 20 | 0) >> 2] = $12;
    $12 = $12 + 1 | 0;
    $9 = HEAP32[($5 + 4 | 0) >> 2] | 0;
    if (($9 | 0) > (-1 | 0)) {
     continue label$13
    }
   }
   label$15 : {
    label$16 : {
     if (($11 | 0) != ($1 | 0)) {
      break label$16
     }
     label$17 : {
      if (!$8) {
       break label$17
      }
      $5 = $0 + 40 | 0;
      $9 = $1;
      label$18 : while (1) {
       HEAP32[$5 >> 2] = -1;
       $5 = $5 + 44 | 0;
       $9 = $9 + -1 | 0;
       if ($9) {
        continue label$18
       }
       break label$18;
      };
      $5 = $0 + 16 | 0;
      $9 = $1;
      label$19 : while (1) {
       HEAP8[$5 >> 0] = 0;
       $5 = $5 + 44 | 0;
       $9 = $9 + -1 | 0;
       if ($9) {
        continue label$19
       }
       break label$19;
      };
     }
     HEAP8[$10 >> 0] = 1;
     $8 = 0;
     label$20 : while (1) {
      label$21 : {
       $11 = $6;
       $5 = $0 + Math_imul($6, 44) | 0;
       if (HEAPU8[($5 + 16 | 0) >> 0] | 0) {
        break label$21
       }
       HEAP8[($5 + 16 | 0) >> 0] = 1;
       $6 = HEAP32[($5 + 24 | 0) >> 2] | 0;
       HEAP32[($5 + 36 | 0) >> 2] = $6;
       HEAP32[($5 + 32 | 0) >> 2] = $6;
       label$22 : {
        $6 = FUNCTION_TABLE[$2 | 0]($11, $3) | 0;
        if (($6 | 0) < (0 | 0)) {
         break label$22
        }
        $9 = $5 + 32 | 0;
        $12 = $5 + 36 | 0;
        label$23 : while (1) {
         label$24 : {
          if (($6 | 0) == (HEAP32[$5 >> 2] | 0 | 0)) {
           break label$24
          }
          label$25 : {
           $6 = HEAP32[(($0 + Math_imul($6, 44) | 0) + 20 | 0) >> 2] | 0;
           if ((HEAP32[$9 >> 2] | 0 | 0) <= ($6 | 0)) {
            break label$25
           }
           HEAP32[$9 >> 2] = $6;
          }
          if ((HEAP32[$12 >> 2] | 0 | 0) >= ($6 | 0)) {
           break label$24
          }
          HEAP32[$12 >> 2] = $6;
         }
         $6 = FUNCTION_TABLE[$2 | 0](-1, $3) | 0;
         if (($6 | 0) > (-1 | 0)) {
          continue label$23
         }
         break label$23;
        };
       }
       $6 = HEAP32[($5 + 4 | 0) >> 2] | 0;
       if (($6 | 0) > (-1 | 0)) {
        continue label$20
       }
      }
      if (($11 | 0) == ($1 | 0)) {
       break label$15
      }
      label$26 : {
       $6 = HEAP32[($5 + 4 | 0) >> 2] | 0;
       if (($6 | 0) < (0 | 0)) {
        break label$26
       }
       $12 = $5 + 36 | 0;
       $10 = $5 + 32 | 0;
       $11 = HEAP32[($5 + 32 | 0) >> 2] | 0;
       label$27 : while (1) {
        label$28 : {
         $6 = $0 + Math_imul($6, 44) | 0;
         $9 = HEAP32[($6 + 32 | 0) >> 2] | 0;
         if (($11 | 0) <= ($9 | 0)) {
          break label$28
         }
         HEAP32[$10 >> 2] = $9;
         $11 = $9;
        }
        label$29 : {
         $9 = HEAP32[($6 + 36 | 0) >> 2] | 0;
         if ((HEAP32[$12 >> 2] | 0 | 0) >= ($9 | 0)) {
          break label$29
         }
         HEAP32[$12 >> 2] = $9;
        }
        $6 = HEAP32[($6 + 8 | 0) >> 2] | 0;
        if (($6 | 0) > (-1 | 0)) {
         continue label$27
        }
        break label$27;
       };
      }
      label$30 : {
       $6 = HEAP32[$5 >> 2] | 0;
       if (($6 | 0) == ($1 | 0)) {
        break label$30
       }
       if ((HEAP32[($5 + 32 | 0) >> 2] | 0 | 0) < (HEAP32[($5 + 24 | 0) >> 2] | 0 | 0)) {
        break label$30
       }
       if ((HEAP32[($5 + 36 | 0) >> 2] | 0 | 0) > (HEAP32[($5 + 28 | 0) >> 2] | 0 | 0)) {
        break label$30
       }
       HEAP32[($5 + 40 | 0) >> 2] = $6;
       $8 = $8 + 1 | 0;
      }
      $5 = HEAP32[($5 + 8 | 0) >> 2] | 0;
      $6 = ($5 | 0) < (0 | 0) ? $6 : $5;
      continue label$20;
     };
    }
    HEAP32[($5 + 28 | 0) >> 2] = $12 + -1 | 0;
    $9 = HEAP32[($5 + 8 | 0) >> 2] | 0;
    if (($9 | 0) > (-1 | 0)) {
     continue label$13
    }
    $9 = HEAP32[$5 >> 2] | 0;
    continue label$13;
   }
   break label$13;
  };
  return ($8 | 0) < ($4 | 0) | 0;
 }
 
 function shuffle($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $9 = 0, $3 = 0, $7 = 0, $8 = 0, $6 = 0, $4 = 0;
  $3 = __stack_pointer - 512 | 0;
  __stack_pointer = $3;
  label$1 : {
   if (($1 | 0) < (2 | 0)) {
    break label$1
   }
   $4 = ($2 | 0) < (1 | 0);
   label$2 : while (1) {
    label$3 : {
     $5 = undefined_weak_JS_random_upto($1 | 0) | 0;
     $6 = $1 + -1 | 0;
     if (($5 | 0) == ($6 | 0)) {
      break label$3
     }
     if ($4) {
      break label$3
     }
     $7 = $0 + Math_imul($6, $2) | 0;
     $8 = $0 + Math_imul($5, $2) | 0;
     $9 = $2;
     label$4 : while (1) {
      $5 = $9 >>> 0 < 512 >>> 0 ? $9 : 512;
      wasm2js_memory_copy($3, $7, $5);
      wasm2js_memory_copy($7, $8, $5);
      wasm2js_memory_copy($8, $3, $5);
      $8 = $8 + $5 | 0;
      $7 = $7 + $5 | 0;
      $9 = $9 - $5 | 0;
      if (($9 | 0) > (0 | 0)) {
       continue label$4
      }
      break label$4;
     };
    }
    $5 = ($1 | 0) > (2 | 0);
    $1 = $6;
    if ($5) {
     continue label$2
    }
    break label$2;
   };
  }
  __stack_pointer = $3 + 512 | 0;
 }
 
 function new_game_desc($0) {
  $0 = $0 | 0;
  var $14 = 0, $24 = 0, $27 = 0, $25 = 0, $26 = 0, $29 = 0, $4 = 0, $28 = 0, $39 = 0, $3 = 0, $1 = 0, $2 = 0, $5 = 0, $30 = 0, $34 = 0, $38 = 0, $37 = 0, $40 = 0, $42 = 0, $32 = 0, $35 = 0, $49 = 0, $33 = 0, $46 = 0, $48 = 0, $50 = 0, $6 = 0, $16 = 0, $18 = 0, $20 = 0, $22 = 0, $43 = 0, $47 = 0, $8 = 0, $36 = 0, $45 = 0, $7 = 0, $10 = 0, $13 = 0, i64toi32_i32$0 = 0, $41 = 0, $11 = 0, $31 = 0, $51 = Math_fround(0), $9 = 0, $12 = 0, $15 = 0, $17 = 0, $19 = 0, $21 = 0, $23 = 0, $250 = 0, $252 = 0, $391 = 0, $44 = 0, $1193 = 0;
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
  $9 = Math_imul($7, $8) + 8 | 0;
  $10 = $4 + -1 | 0;
  $11 = 0 - $5 | 0;
  $12 = $7 + -4 | 0;
  $13 = $5 << 2 | 0;
  $14 = Math_imul($5, 5);
  $15 = -4 - $14 | 0;
  $16 = $5 + 1 | 0;
  $17 = $16 << 2 | 0;
  $18 = $14 + 4 | 0;
  $19 = $18 << 2 | 0;
  $20 = ($4 | 0) / (2 | 0) | 0;
  $21 = ($20 + 1 | 0 | 0) >= ($4 | 0);
  $22 = ($3 | 0) / (2 | 0) | 0;
  $23 = ($22 + 1 | 0 | 0) >= ($3 | 0);
  label$1 : while (1) {
   label$2 : {
    if (!$5) {
     break label$2
    }
    $14 = $2;
    $24 = $5;
    label$3 : while (1) {
     HEAP8[$14 >> 0] = 0;
     $14 = $14 + 1 | 0;
     $24 = $24 + -1 | 0;
     if ($24) {
      continue label$3
     }
     break label$3;
    };
    $14 = $6;
    $24 = $5;
    label$4 : while (1) {
     HEAP8[$14 >> 0] = 0;
     $14 = $14 + 1 | 0;
     $24 = $24 + -1 | 0;
     if ($24) {
      continue label$4
     }
     break label$4;
    };
   }
   $24 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
   HEAP32[($24 + 4 | 0) >> 2] = 1;
   HEAP32[$24 >> 2] = 0;
   $14 = $24 + 8 | 0;
   HEAP32[(0 + 1104 | 0) >> 2] = $14;
   label$5 : {
    if ($21) {
     break label$5
    }
    HEAP32[(0 + 1104 | 0) >> 2] = $24 + 20 | 0;
    HEAP32[($24 + 16 | 0) >> 2] = 1;
    HEAP32[($24 + 12 | 0) >> 2] = $22;
    HEAP32[$14 >> 2] = $20;
    add234_internal($24 | 0, $14 | 0, -1 | 0) | 0;
   }
   label$6 : {
    if (($3 | 0) < (2 | 0)) {
     break label$6
    }
    $14 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[(0 + 1104 | 0) >> 2] = $14 + 12 | 0;
    HEAP32[($14 + 8 | 0) >> 2] = 2;
    HEAP32[($14 + 4 | 0) >> 2] = $22;
    HEAP32[$14 >> 2] = $20;
    if (!(HEAP32[($24 + 4 | 0) >> 2] | 0)) {
     break label$6
    }
    add234_internal($24 | 0, $14 | 0, -1 | 0) | 0;
   }
   label$7 : {
    if (($4 | 0) < (2 | 0)) {
     break label$7
    }
    $14 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[(0 + 1104 | 0) >> 2] = $14 + 12 | 0;
    HEAP32[($14 + 8 | 0) >> 2] = 4;
    HEAP32[($14 + 4 | 0) >> 2] = $22;
    HEAP32[$14 >> 2] = $20;
    if (!(HEAP32[($24 + 4 | 0) >> 2] | 0)) {
     break label$7
    }
    add234_internal($24 | 0, $14 | 0, -1 | 0) | 0;
   }
   label$8 : {
    if ($23) {
     break label$8
    }
    $14 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
    HEAP32[(0 + 1104 | 0) >> 2] = $14 + 12 | 0;
    HEAP32[($14 + 8 | 0) >> 2] = 8;
    HEAP32[($14 + 4 | 0) >> 2] = $22;
    HEAP32[$14 >> 2] = $20;
    if (!(HEAP32[($24 + 4 | 0) >> 2] | 0)) {
     break label$8
    }
    add234_internal($24 | 0, $14 | 0, -1 | 0) | 0;
   }
   label$9 : {
    if ((count234($24 | 0) | 0 | 0) < (1 | 0)) {
     break label$9
    }
    label$10 : while (1) {
     $14 = delpos234($24 | 0, undefined_weak_JS_random_upto(count234($24 | 0) | 0 | 0) | 0 | 0) | 0;
     $25 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
     $26 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     $27 = HEAP32[($14 + 4 | 0) >> 2] | 0;
     $28 = HEAP32[$14 >> 2] | 0;
     $29 = $2 + (Math_imul($26, $27) + $28 | 0) | 0;
     $14 = HEAP32[($14 + 8 | 0) >> 2] | 0;
     HEAP8[$29 >> 0] = HEAPU8[$29 >> 0] | 0 | $14 | 0;
     $25 = ($25 + ($27 + (($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) | 0) | 0 | 0) % ($25 | 0) | 0;
     $26 = (($26 + $28 | 0) + (($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($26 | 0) | 0;
     $29 = $2 + (Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, $25) + $26 | 0) | 0;
     $250 = $29;
     $252 = HEAPU8[$29 >> 0] | 0;
     $29 = ($14 >>> 2 | 0) & 3 | 0 | (($14 << 2 | 0) & 12 | 0) | 0;
     HEAP8[$250 >> 0] = $252 | $29 | 0;
     label$11 : {
      $30 = $2 + ($28 + Math_imul($27, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0;
      $14 = HEAPU8[$30 >> 0] | 0;
      if (((((($14 >>> 2 | 0) & 1 | 0) + ($14 & 1 | 0) | 0) + (($14 >>> 3 | 0) & 1 | 0) | 0) + (($14 >>> 1 | 0) & 1 | 0) | 0 | 0) != (3 | 0)) {
       break label$11
      }
      HEAP32[($1 + 52 | 0) >> 2] = $27;
      HEAP32[($1 + 48 | 0) >> 2] = $28;
      HEAP32[($1 + 56 | 0) >> 2] = (HEAPU8[$30 >> 0] | 0) ^ 15 | 0;
      $14 = findrelpos234($24 | 0, $1 + 48 | 0 | 0, 0 | 0, 0 | 0, 0 | 0) | 0;
      if (!$14) {
       break label$11
      }
      del234($24 | 0, $14 | 0) | 0;
     }
     $14 = 1;
     label$12 : while (1) {
      HEAP32[($1 + 56 | 0) >> 2] = ($14 >>> 2 | 0) & 3 | 0 | (($14 << 2 | 0) & 12 | 0) | 0;
      $27 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
      HEAP32[($1 + 52 | 0) >> 2] = (((($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) + $25 | 0) + $27 | 0 | 0) % ($27 | 0) | 0;
      $27 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
      HEAP32[($1 + 48 | 0) >> 2] = (((($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) + $26 | 0) + $27 | 0 | 0) % ($27 | 0) | 0;
      label$13 : {
       $27 = findrelpos234($24 | 0, $1 + 48 | 0 | 0, 0 | 0, 0 | 0, 0 | 0) | 0;
       if (!$27) {
        break label$13
       }
       del234($24 | 0, $27 | 0) | 0;
      }
      $14 = $14 << 1 | 0;
      if (($14 | 0) < (16 | 0)) {
       continue label$12
      }
      break label$12;
     };
     $14 = 1;
     label$14 : while (1) {
      label$15 : {
       if (($14 | 0) == ($29 | 0)) {
        break label$15
       }
       label$16 : {
        if (HEAPU8[(1088 + 8 | 0) >> 0] | 0) {
         break label$16
        }
        if (!$25 & ($14 | 0) == (2 | 0) | 0) {
         break label$15
        }
        if (($25 | 0) == ($8 | 0) & ($14 | 0) == (8 | 0) | 0) {
         break label$15
        }
        if (!$26 & ($14 | 0) == (4 | 0) | 0) {
         break label$15
        }
        if (($26 | 0) == ($10 | 0) & ($14 | 0) == (1 | 0) | 0) {
         break label$15
        }
       }
       $27 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
       $391 = (((($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) + $25 | 0) + $27 | 0 | 0) % ($27 | 0) | 0;
       $27 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
       if (HEAPU8[($2 + (Math_imul($391, $27) + ((((($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) + $26 | 0) + $27 | 0 | 0) % ($27 | 0) | 0) | 0) | 0) >> 0] | 0) {
        break label$15
       }
       $27 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $27 + 12 | 0;
       HEAP32[($27 + 8 | 0) >> 2] = $14;
       HEAP32[($27 + 4 | 0) >> 2] = $25;
       HEAP32[$27 >> 2] = $26;
       if (!(HEAP32[($24 + 4 | 0) >> 2] | 0)) {
        break label$15
       }
       add234_internal($24 | 0, $27 | 0, -1 | 0) | 0;
      }
      $14 = $14 << 1 | 0;
      if (($14 | 0) < (16 | 0)) {
       continue label$14
      }
      break label$14;
     };
     if ((count234($24 | 0) | 0 | 0) >= (1 | 0)) {
      continue label$10
     }
     break label$10;
    };
   }
   freenode234(HEAP32[$24 >> 2] | 0 | 0);
   label$17 : {
    if (!(HEAPU8[(1088 + 9 | 0) >> 0] | 0)) {
     break label$17
    }
    $26 = -1;
    label$18 : while (1) {
     $31 = $26;
     $32 = 0;
     $33 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     $34 = $33 + $13 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $34;
     $35 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
     label$19 : {
      $36 = ($5 | 0) < (1 | 0);
      if ($36) {
       break label$19
      }
      $28 = 0;
      $26 = $33;
      $32 = 0;
      label$20 : while (1) {
       $29 = $33 + ($28 << 2 | 0) | 0;
       $30 = $2 + $28 | 0;
       HEAP8[$29 >> 0] = (HEAPU8[$30 >> 0] | 0) & 15 | 0;
       $14 = 0;
       label$21 : while (1) {
        $24 = 255;
        label$22 : {
         $25 = $26 + $14 | 0;
         $27 = HEAPU8[$25 >> 0] | 0;
         if (($27 | 0) == (255 | 0)) {
          break label$22
         }
         $24 = ($27 << 1 | 0) & 14 | 0 | (($27 >>> 3 | 0) & 1 | 0) | 0;
         $24 = ($24 | 0) == (HEAPU8[$29 >> 0] | 0 | 0) ? -1 : $24;
        }
        HEAP8[($25 + 1 | 0) >> 0] = $24;
        $14 = $14 + 1 | 0;
        if (($14 | 0) != (3 | 0)) {
         continue label$21
        }
        break label$21;
       };
       $26 = $26 + 4 | 0;
       $32 = $32 + ((HEAPU8[$30 >> 0] | 0 | 0) != (0 | 0)) | 0;
       $28 = $28 + 1 | 0;
       if (($28 | 0) != ($5 | 0)) {
        continue label$20
       }
       break label$20;
      };
      $34 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     }
     $37 = $34 + $18 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $37;
     label$23 : {
      if (!$18) {
       break label$23
      }
      $24 = $15;
      $14 = $34;
      label$24 : while (1) {
       HEAP8[$14 >> 0] = 0;
       $14 = $14 + 1 | 0;
       $24 = $24 + 1 | 0;
       if ($24) {
        continue label$24
       }
       break label$24;
      };
      $37 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     }
     $38 = $37 + $19 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $38;
     label$25 : {
      if (($18 | 0) < (1 | 0)) {
       break label$25
      }
      $27 = $32 + 1 | 0;
      $14 = $37;
      $24 = $18;
      label$26 : while (1) {
       HEAP32[$14 >> 2] = $27;
       $14 = $14 + 4 | 0;
       $24 = $24 + -1 | 0;
       if ($24) {
        continue label$26
       }
       break label$26;
      };
      $38 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     }
     HEAP32[(0 + 1104 | 0) >> 2] = $38 + $13 | 0;
     label$27 : {
      if ($36) {
       break label$27
      }
      $14 = $38;
      $24 = $5;
      label$28 : while (1) {
       HEAP32[$14 >> 2] = 6;
       $14 = $14 + 4 | 0;
       $24 = $24 + -1 | 0;
       if ($24) {
        continue label$28
       }
       break label$28;
      };
     }
     label$29 : {
      if ($35 & 255 | 0) {
       break label$29
      }
      label$30 : {
       if (($4 | 0) < (1 | 0)) {
        break label$30
       }
       $14 = $34;
       $24 = $4;
       label$31 : while (1) {
        HEAP8[($14 + $9 | 0) >> 0] = 2;
        HEAP8[($14 + 2 | 0) >> 0] = 2;
        $14 = $14 + 5 | 0;
        $24 = $24 + -1 | 0;
        if ($24) {
         continue label$31
        }
        break label$31;
       };
      }
      if (($3 | 0) < (1 | 0)) {
       break label$29
      }
      $14 = $34;
      $24 = $3;
      label$32 : while (1) {
       HEAP8[($14 + 4 | 0) >> 0] = 2;
       HEAP8[($14 + $12 | 0) >> 0] = 2;
       $14 = $14 + $7 | 0;
       $24 = $24 + -1 | 0;
       if ($24) {
        continue label$32
       }
       break label$32;
      };
     }
     $39 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     $14 = $39 + 20 | 0;
     HEAP32[$39 >> 2] = $14;
     $27 = $14 + $5 | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $27;
     label$33 : {
      if (!$5) {
       break label$33
      }
      $24 = $5;
      label$34 : while (1) {
       HEAP8[$14 >> 0] = 0;
       $14 = $14 + 1 | 0;
       $24 = $24 + -1 | 0;
       if ($24) {
        continue label$34
       }
       break label$34;
      };
      $27 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     }
     HEAP32[($39 + 8 | 0) >> 2] = $16;
     HEAP32[($39 + 4 | 0) >> 2] = $27;
     i64toi32_i32$0 = 0;
     HEAP32[($39 + 12 | 0) >> 2] = 0;
     HEAP32[($39 + 16 | 0) >> 2] = i64toi32_i32$0;
     $24 = 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $27 + $17 | 0;
     $40 = 1;
     $41 = $32 + 1 | 0;
     $27 = 0;
     label$35 : {
      label$36 : {
       label$37 : while (1) {
        $14 = $24;
        label$38 : {
         label$39 : {
          if (($27 | 0) == ($14 | 0)) {
           break label$39
          }
          $14 = $27 + 1 | 0;
          HEAP32[($39 + 12 | 0) >> 2] = $14;
          $42 = HEAP32[((HEAP32[($39 + 4 | 0) >> 2] | 0) + ($27 << 2 | 0) | 0) >> 2] | 0;
          $14 = ($14 | 0) == (HEAP32[($39 + 8 | 0) >> 2] | 0 | 0) ? 0 : $14;
          HEAP32[($39 + 12 | 0) >> 2] = $14;
          HEAP8[($42 + (HEAP32[$39 >> 2] | 0) | 0) >> 0] = 0;
          if (($42 | 0) != (-1 | 0)) {
           break label$38
          }
         }
         if (!($40 & 1 | 0)) {
          break label$36
         }
         label$40 : {
          if ($36) {
           break label$40
          }
          $26 = HEAP32[$39 >> 2] | 0;
          $14 = 0;
          label$41 : while (1) {
           label$42 : {
            $27 = $26 + $14 | 0;
            if (HEAPU8[$27 >> 0] | 0) {
             break label$42
            }
            $25 = $24 + 1 | 0;
            HEAP32[($39 + 16 | 0) >> 2] = $25;
            HEAP32[((HEAP32[($39 + 4 | 0) >> 2] | 0) + ($24 << 2 | 0) | 0) >> 2] = $14;
            HEAP8[$27 >> 0] = 1;
            $24 = $25;
            if (($24 | 0) != (HEAP32[($39 + 8 | 0) >> 2] | 0 | 0)) {
             break label$42
            }
            $24 = 0;
            HEAP32[($39 + 16 | 0) >> 2] = 0;
           }
           $14 = $14 + 1 | 0;
           if (($5 | 0) != ($14 | 0)) {
            continue label$41
           }
           break label$41;
          };
          $14 = HEAP32[($39 + 12 | 0) >> 2] | 0;
         }
         label$43 : {
          if (($14 | 0) != ($24 | 0)) {
           break label$43
          }
          $40 = 0;
          $42 = -1;
          break label$38;
         }
         $24 = $14 + 1 | 0;
         HEAP32[($39 + 12 | 0) >> 2] = $24;
         $40 = 0;
         $42 = HEAP32[((HEAP32[($39 + 4 | 0) >> 2] | 0) + ($14 << 2 | 0) | 0) >> 2] | 0;
         HEAP32[($39 + 12 | 0) >> 2] = ($24 | 0) == (HEAP32[($39 + 8 | 0) >> 2] | 0 | 0) ? 0 : $24;
         HEAP8[($42 + (HEAP32[$39 >> 2] | 0) | 0) >> 0] = 0;
        }
        $43 = 0;
        $44 = edsf_canonify($38 | 0, $42 | 0, 0 | 0) | 0;
        HEAP32[($1 + 64 | 0) >> 2] = 0;
        HEAP32[($1 + 80 | 0) >> 2] = 0;
        i64toi32_i32$0 = 0;
        HEAP32[($1 + 52 | 0) >> 2] = 0;
        HEAP32[($1 + 56 | 0) >> 2] = i64toi32_i32$0;
        $35 = Math_imul($42, 5);
        $45 = $42 << 2 | 0;
        $14 = ($42 | 0) / ($4 | 0) | 0;
        $46 = $14 + $3 | 0;
        $47 = ($42 - Math_imul($14, $4) | 0) + $4 | 0;
        $48 = 0;
        label$44 : {
         label$45 : while (1) {
          label$46 : {
           $49 = HEAPU8[($33 + ($43 + $45 | 0) | 0) >> 0] | 0;
           if (($49 | 0) != (255 | 0)) {
            break label$46
           }
           $14 = $43;
           break label$44;
          }
          HEAP32[$1 >> 2] = $44;
          $25 = 1;
          $50 = 0;
          $30 = 0;
          $29 = 1;
          $14 = 1;
          label$47 : while (1) {
           $24 = $14;
           $27 = $14 & $49 | 0;
           $26 = !$27;
           $28 = $14 + $35 | 0;
           $14 = HEAPU8[($34 + $28 | 0) >> 0] | 0;
           $29 = $29 & (($26 & ($14 | 0) == (1 | 0) | 0) ^ ($26 | ($14 | 0) != (2 | 0) | 0) | 0) | 0;
           label$48 : {
            if (!$27) {
             break label$48
            }
            label$49 : {
             label$50 : {
              $27 = HEAP32[($37 + ($28 << 2 | 0) | 0) >> 2] | 0;
              if (($27 | 0) > ($32 | 0)) {
               break label$50
              }
              $50 = $27 + $50 | 0;
              break label$49;
             }
             HEAP32[(($1 + 32 | 0) + ($30 << 2 | 0) | 0) >> 2] = $24;
             $30 = $30 + 1 | 0;
            }
            if ($14) {
             break label$48
            }
            $26 = edsf_canonify($38 | 0, Math_imul(((($24 | 0) == (8 | 0) ? 1 : ($24 | 0) == (2 | 0) ? -1 : 0) + $46 | 0 | 0) % ($3 | 0) | 0, $4) + (((($24 | 0) == (1 | 0) ? 1 : ($24 | 0) == (4 | 0) ? -1 : 0) + $47 | 0 | 0) % ($4 | 0) | 0) | 0 | 0, 0 | 0) | 0;
            $27 = 0;
            label$51 : {
             label$52 : {
              if (($25 | 0) < (1 | 0)) {
               break label$52
              }
              $27 = 0;
              $14 = $1;
              label$53 : while (1) {
               if (($26 | 0) == (HEAP32[$14 >> 2] | 0 | 0)) {
                break label$52
               }
               $14 = $14 + 4 | 0;
               $27 = $27 + 1 | 0;
               if (($25 | 0) != ($27 | 0)) {
                continue label$53
               }
               break label$51;
              };
             }
             if (($27 | 0) == ($25 | 0)) {
              break label$51
             }
             $29 = 0;
             break label$48;
            }
            HEAP32[($1 + ($25 << 2 | 0) | 0) >> 2] = $26;
            $25 = $25 + 1 | 0;
           }
           $14 = $24 << 1 | 0;
           if ($24 >>> 0 < 5 >>> 0) {
            continue label$47
           }
           break label$47;
          };
          label$54 : {
           label$55 : {
            label$56 : {
             label$57 : {
              switch ($30 | 0) {
              default:
               if (($30 | 0) < (1 | 0)) {
                break label$56
               }
               $14 = $1 + 32 | 0;
               label$60 : while (1) {
                HEAP32[(($1 + 48 | 0) + ((HEAP32[$14 >> 2] | 0) << 2 | 0) | 0) >> 2] = $41;
                $14 = $14 + 4 | 0;
                $30 = $30 + -1 | 0;
                if ($30) {
                 continue label$60
                }
                break label$56;
               };
              case 0:
               if (($50 | 0) > (0 | 0) & ($50 + 1 | 0 | 0) < ($32 | 0) | 0) {
                break label$54
               }
               if (!($29 ^ 1 | 0)) {
                break label$55
               }
               break label$54;
              case 1:
               break label$57;
              };
             }
             $14 = ($1 + 48 | 0) + ((HEAP32[($1 + 32 | 0) >> 2] | 0) << 2 | 0) | 0;
             if ((HEAP32[$14 >> 2] | 0 | 0) > ($50 | 0)) {
              break label$56
             }
             HEAP32[$14 >> 2] = $50 + 1 | 0;
            }
            if (!$29) {
             break label$54
            }
           }
           HEAP8[($33 + ($48 + $45 | 0) | 0) >> 0] = $49;
           $48 = $48 + 1 | 0;
          }
          $14 = 4;
          $43 = $43 + 1 | 0;
          if (($43 | 0) != (4 | 0)) {
           continue label$45
          }
          break label$45;
         };
        }
        if (!$48) {
         break label$35
        }
        label$61 : {
         if (($48 | 0) >= ($14 | 0)) {
          break label$61
         }
         $40 = 1;
         if (($48 | 0) > (3 | 0)) {
          break label$61
         }
         wasm2js_memory_fill($33 + ($48 + $45 | 0) | 0, 255, 4 - $48 | 0);
        }
        $26 = $33 + $45 | 0;
        $27 = 15;
        $14 = 0;
        $25 = 0;
        label$62 : {
         label$63 : while (1) {
          $24 = HEAPU8[($26 + $14 | 0) >> 0] | 0;
          if (($24 | 0) == (255 | 0)) {
           break label$62
          }
          $25 = $25 | $24 | 0;
          $27 = $27 & $24 | 0;
          $14 = $14 + 1 | 0;
          if (($14 | 0) != (4 | 0)) {
           continue label$63
          }
          break label$63;
         };
        }
        $24 = 1;
        label$64 : while (1) {
         label$65 : {
          $14 = $24;
          $24 = $34 + ($14 + $35 | 0) | 0;
          if (HEAPU8[$24 >> 0] | 0) {
           break label$65
          }
          $26 = ($14 >>> 2 | 0) & 3 | 0 | (($14 << 2 | 0) & 12 | 0) | 0;
          $29 = ((($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) + $46 | 0 | 0) % ($3 | 0) | 0;
          $28 = ((($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) + $47 | 0 | 0) % ($4 | 0) | 0;
          label$66 : {
           label$67 : {
            if (!($14 & $27 | 0)) {
             break label$67
            }
            $40 = 1;
            HEAP8[$24 >> 0] = 1;
            $24 = Math_imul($29, $4) + $28 | 0;
            HEAP8[($34 + (Math_imul($24, 5) + $26 | 0) | 0) >> 0] = 1;
            edsf_merge($38 | 0, $42 | 0, $24 | 0, 0 | 0);
            $26 = (HEAP32[$39 >> 2] | 0) + $24 | 0;
            if (HEAPU8[$26 >> 0] | 0) {
             break label$65
            }
            $40 = 1;
            $29 = HEAP32[($39 + 16 | 0) >> 2] | 0;
            $28 = $29 + 1 | 0;
            HEAP32[($39 + 16 | 0) >> 2] = $28;
            HEAP32[((HEAP32[($39 + 4 | 0) >> 2] | 0) + ($29 << 2 | 0) | 0) >> 2] = $24;
            HEAP8[$26 >> 0] = 1;
            if (($28 | 0) == (HEAP32[($39 + 8 | 0) >> 2] | 0 | 0)) {
             break label$66
            }
            break label$65;
           }
           if ($14 & $25 | 0) {
            break label$65
           }
           HEAP8[$24 >> 0] = 2;
           $24 = Math_imul($29, $4) + $28 | 0;
           HEAP8[($34 + (Math_imul($24, 5) + $26 | 0) | 0) >> 0] = 2;
           $40 = 1;
           $26 = (HEAP32[$39 >> 2] | 0) + $24 | 0;
           if (HEAPU8[$26 >> 0] | 0) {
            break label$65
           }
           $40 = 1;
           $29 = HEAP32[($39 + 16 | 0) >> 2] | 0;
           $28 = $29 + 1 | 0;
           HEAP32[($39 + 16 | 0) >> 2] = $28;
           HEAP32[((HEAP32[($39 + 4 | 0) >> 2] | 0) + ($29 << 2 | 0) | 0) >> 2] = $24;
           HEAP8[$26 >> 0] = 1;
           if (($28 | 0) != (HEAP32[($39 + 8 | 0) >> 2] | 0 | 0)) {
            break label$65
           }
          }
          HEAP32[($39 + 16 | 0) >> 2] = 0;
          $40 = 1;
         }
         $24 = $14 << 1 | 0;
         if ($14 >>> 0 < 5 >>> 0) {
          continue label$64
         }
         break label$64;
        };
        $24 = 1;
        label$68 : while (1) {
         label$69 : {
          $14 = $24;
          $27 = $14 << 2 | 0;
          $24 = HEAP32[(($1 + 48 | 0) + $27 | 0) >> 2] | 0;
          if (($24 | 0) < (1 | 0)) {
           break label$69
          }
          $25 = Math_imul(((($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) + $46 | 0 | 0) % ($3 | 0) | 0, $4) + (((($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) + $47 | 0 | 0) % ($4 | 0) | 0) | 0;
          $27 = $37 + ((Math_imul($25, 5) + (($14 >>> 2 | 0) & 3 | 0 | ($27 & 12 | 0) | 0) | 0) << 2 | 0) | 0;
          if ((HEAP32[$27 >> 2] | 0 | 0) <= ($24 | 0)) {
           break label$69
          }
          HEAP32[$27 >> 2] = $24;
          $40 = 1;
          $24 = (HEAP32[$39 >> 2] | 0) + $25 | 0;
          if (HEAPU8[$24 >> 0] | 0) {
           break label$69
          }
          $40 = 1;
          $27 = HEAP32[($39 + 16 | 0) >> 2] | 0;
          $26 = $27 + 1 | 0;
          HEAP32[($39 + 16 | 0) >> 2] = $26;
          HEAP32[((HEAP32[($39 + 4 | 0) >> 2] | 0) + ($27 << 2 | 0) | 0) >> 2] = $25;
          HEAP8[$24 >> 0] = 1;
          if (($26 | 0) != (HEAP32[($39 + 8 | 0) >> 2] | 0 | 0)) {
           break label$69
          }
          HEAP32[($39 + 16 | 0) >> 2] = 0;
         }
         $24 = $14 << 1 | 0;
         if ($14 >>> 0 < 5 >>> 0) {
          continue label$68
         }
         break label$68;
        };
        $24 = HEAP32[($39 + 16 | 0) >> 2] | 0;
        $27 = HEAP32[($39 + 12 | 0) >> 2] | 0;
        continue label$37;
       };
      }
      if ($36) {
       break label$17
      }
      $27 = 1;
      $14 = 0;
      label$70 : while (1) {
       $24 = $14 + 1 | 0;
       $14 = $33 + ($14 << 2 | 0) | 0;
       label$71 : {
        label$72 : while (1) {
         if ((HEAPU8[($14 + 1 | 0) >> 0] | 0 | 0) != (255 | 0)) {
          break label$71
         }
         HEAP8[(($2 + $24 | 0) + -1 | 0) >> 0] = HEAPU8[$14 >> 0] | 0 | 16 | 0;
         $14 = $14 + 4 | 0;
         $24 = $24 + 1 | 0;
         if (($11 + $24 | 0 | 0) != (1 | 0)) {
          continue label$72
         }
         break label$72;
        };
        if (($27 | 0) != (1 | 0)) {
         break label$35
        }
        $14 = $2;
        $24 = $5;
        label$73 : while (1) {
         HEAP8[$14 >> 0] = (HEAPU8[$14 >> 0] | 0) & 239 | 0;
         $14 = $14 + 1 | 0;
         $24 = $24 + -1 | 0;
         if ($24) {
          continue label$73
         }
         break label$17;
        };
       }
       $14 = ($2 + $24 | 0) + -1 | 0;
       HEAP8[$14 >> 0] = (HEAPU8[$14 >> 0] | 0) & 239 | 0;
       $27 = 0;
       $14 = $24;
       if ($11 + $14 | 0) {
        continue label$70
       }
       break label$70;
      };
     }
     label$74 : {
      label$75 : {
       if (($3 | 0) >= (1 | 0)) {
        break label$75
       }
       $26 = 0;
       break label$74;
      }
      $28 = 0;
      $26 = 0;
      label$76 : while (1) {
       label$77 : {
        label$78 : {
         if (($4 | 0) > (0 | 0)) {
          break label$78
         }
         $28 = $28 + 1 | 0;
         break label$77;
        }
        $25 = $2 + Math_imul($28, $4) | 0;
        $27 = $28 + 1 | 0;
        $30 = $2 + Math_imul($27, $4) | 0;
        $14 = 0;
        label$79 : while (1) {
         label$80 : {
          $24 = $14;
          $14 = $14 + 1 | 0;
          if (($14 | 0) >= ($4 | 0)) {
           break label$80
          }
          $29 = $25 + $24 | 0;
          $1193 = HEAPU8[($29 + 1 | 0) >> 0] | 0;
          $29 = HEAPU8[$29 >> 0] | 0;
          if (!(($1193 ^ $29 | 0) & 16 | 0)) {
           break label$80
          }
          $26 = $26 + 1 | 0;
          $34 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
          label$81 : {
           if (!($29 & 16 | 0)) {
            break label$81
           }
           perturb($4 | 0, $3 | 0, $2 | 0, ($34 & 255 | 0 | 0) != (0 | 0) | 0, $14 | 0, $28 | 0, 4 | 0);
           break label$80;
          }
          perturb($4 | 0, $3 | 0, $2 | 0, ($34 & 255 | 0 | 0) != (0 | 0) | 0, $24 | 0, $28 | 0, 1 | 0);
         }
         label$82 : {
          if (($27 | 0) >= ($3 | 0)) {
           break label$82
          }
          $29 = HEAPU8[($25 + $24 | 0) >> 0] | 0;
          if (!(((HEAPU8[($30 + $24 | 0) >> 0] | 0) ^ $29 | 0) & 16 | 0)) {
           break label$82
          }
          $26 = $26 + 1 | 0;
          $34 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
          label$83 : {
           if (!($29 & 16 | 0)) {
            break label$83
           }
           perturb($4 | 0, $3 | 0, $2 | 0, ($34 & 255 | 0 | 0) != (0 | 0) | 0, $24 | 0, $27 | 0, 2 | 0);
           break label$82;
          }
          perturb($4 | 0, $3 | 0, $2 | 0, ($34 & 255 | 0 | 0) != (0 | 0) | 0, $24 | 0, $28 | 0, 8 | 0);
         }
         if (($4 | 0) != ($14 | 0)) {
          continue label$79
         }
         break label$79;
        };
        $28 = $27;
       }
       if (($28 | 0) != ($3 | 0)) {
        continue label$76
       }
       break label$76;
      };
     }
     if (($31 | 0) == (-1 | 0)) {
      continue label$18
     }
     if (($31 | 0) <= ($26 | 0)) {
      continue label$1
     }
     continue label$18;
    };
   }
   break label$1;
  };
  $38 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[($38 + 4 | 0) >> 2] = 1;
  HEAP32[$38 >> 2] = 0;
  $25 = $38 + 8 | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $25;
  label$84 : {
   if (($3 | 0) < (1 | 0)) {
    break label$84
   }
   $26 = ($4 | 0) < (1 | 0);
   $24 = 0;
   label$85 : while (1) {
    label$86 : {
     if ($26) {
      break label$86
     }
     $14 = 0;
     $25 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
     label$87 : while (1) {
      label$88 : {
       $27 = HEAPU8[($2 + ($14 + Math_imul($24, $25) | 0) | 0) >> 0] | 0;
       if ($27 & 1 | 0) {
        break label$88
       }
       label$89 : {
        if (($14 | 0) < ($10 | 0)) {
         break label$89
        }
        if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
         break label$88
        }
       }
       $27 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $27 + 12 | 0;
       HEAP32[($27 + 8 | 0) >> 2] = 1;
       HEAP32[($27 + 4 | 0) >> 2] = $24;
       HEAP32[$27 >> 2] = $14;
       label$90 : {
        if (!(HEAP32[($38 + 4 | 0) >> 2] | 0)) {
         break label$90
        }
        add234_internal($38 | 0, $27 | 0, -1 | 0) | 0;
        $25 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
       }
       $27 = HEAPU8[($2 + ($14 + Math_imul($24, $25) | 0) | 0) >> 0] | 0;
      }
      label$91 : {
       if ($27 & 8 | 0) {
        break label$91
       }
       label$92 : {
        if (($24 | 0) < ($8 | 0)) {
         break label$92
        }
        if (!((HEAPU8[(1088 + 8 | 0) >> 0] | 0) & 255 | 0)) {
         break label$91
        }
       }
       $27 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       HEAP32[(0 + 1104 | 0) >> 2] = $27 + 12 | 0;
       HEAP32[($27 + 8 | 0) >> 2] = 8;
       HEAP32[($27 + 4 | 0) >> 2] = $24;
       HEAP32[$27 >> 2] = $14;
       if (!(HEAP32[($38 + 4 | 0) >> 2] | 0)) {
        break label$91
       }
       add234_internal($38 | 0, $27 | 0, -1 | 0) | 0;
       $25 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
      }
      $14 = $14 + 1 | 0;
      if (($4 | 0) != ($14 | 0)) {
       continue label$87
      }
      break label$87;
     };
    }
    $24 = $24 + 1 | 0;
    if (($24 | 0) != ($3 | 0)) {
     continue label$85
    }
    break label$85;
   };
   $25 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  }
  HEAP32[(0 + 1104 | 0) >> 2] = $25 + $16 | 0;
  label$93 : {
   if (($5 | 0) < (1 | 0)) {
    break label$93
   }
   $14 = $2;
   $24 = $25;
   $27 = $5;
   label$94 : while (1) {
    HEAP8[$24 >> 0] = HEAPU8[(((HEAPU8[$14 >> 0] | 0) & 15 | 0) + 1024 | 0) >> 0] | 0;
    $14 = $14 + 1 | 0;
    $24 = $24 + 1 | 0;
    $27 = $27 + -1 | 0;
    if ($27) {
     continue label$94
    }
    break label$94;
   };
  }
  HEAP8[($25 + $5 | 0) >> 0] = 0;
  HEAP32[$0 >> 2] = $25;
  $47 = Math_imul($5, 44) + 44 | 0;
  $46 = ($3 | 0) < (1 | 0);
  $41 = ($5 | 0) > (-2 | 0);
  label$95 : while (1) {
   label$96 : {
    if ($46) {
     break label$96
    }
    $27 = 0;
    label$97 : while (1) {
     label$98 : {
      if (($4 | 0) < (1 | 0)) {
       break label$98
      }
      $24 = $2;
      $25 = $4;
      label$99 : while (1) {
       $14 = HEAPU8[($24 + Math_imul($27, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) >> 0] | 0;
       label$100 : {
        label$101 : {
         switch ((undefined_weak_JS_random_upto(4 | 0) | 0) & 3 | 0 | 0) {
         case 1:
          $14 = ($14 << 1 | 0) & 14 | 0 | (($14 >>> 3 | 0) & 1 | 0) | 0;
          break label$100;
         case 2:
          $14 = ($14 >>> 2 | 0) & 3 | 0 | (($14 << 2 | 0) & 12 | 0) | 0;
          break label$100;
         case 0:
          break label$100;
         default:
          break label$101;
         };
        }
        $14 = ($14 >>> 1 | 0) & 7 | 0 | (($14 << 3 | 0) & 8 | 0) | 0;
       }
       HEAP8[($24 + Math_imul($27, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) >> 0] = $14;
       $24 = $24 + 1 | 0;
       $25 = $25 + -1 | 0;
       if ($25) {
        continue label$99
       }
       break label$99;
      };
     }
     $27 = $27 + 1 | 0;
     if (($27 | 0) != ($3 | 0)) {
      continue label$97
     }
     break label$97;
    };
   }
   $32 = $16;
   label$104 : {
    label$105 : while (1) {
     $34 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $34 + $47 | 0;
     HEAP32[($1 + 60 | 0) >> 2] = 0;
     HEAP32[($1 + 56 | 0) >> 2] = $2;
     HEAP32[($1 + 48 | 0) >> 2] = $4;
     HEAP32[($1 + 52 | 0) >> 2] = $3;
     findloop_run($34 | 0, $5 | 0, 2 | 0, $1 + 48 | 0 | 0) | 0;
     $49 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $49 + $13 | 0;
     label$106 : {
      if ($46) {
       break label$106
      }
      $37 = 0;
      label$107 : while (1) {
       label$108 : {
        if (($4 | 0) < (1 | 0)) {
         break label$108
        }
        $26 = $37 + $3 | 0;
        $50 = Math_imul($37, $4);
        $35 = 0;
        label$109 : while (1) {
         $25 = $35 + $4 | 0;
         $28 = $35 + $50 | 0;
         $29 = ($34 + Math_imul($28, 44) | 0) + 40 | 0;
         $27 = HEAPU8[($2 + $28 | 0) >> 0] | 0;
         $14 = 1;
         $30 = 0;
         label$110 : while (1) {
          label$111 : {
           if (!($14 & $27 | 0)) {
            break label$111
           }
           $24 = Math_imul(($26 + (($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($3 | 0) | 0, $4) + (($25 + (($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($4 | 0) | 0) | 0;
           if (!((($14 >>> 2 | 0) & 3 | 0 | (($14 << 2 | 0) & 12 | 0) | 0) & (HEAPU8[($2 + $24 | 0) >> 0] | 0) | 0)) {
            break label$111
           }
           if ((HEAP32[$29 >> 2] | 0 | 0) == ($24 | 0)) {
            break label$111
           }
           if ((HEAP32[(($34 + Math_imul($24, 44) | 0) + 40 | 0) >> 2] | 0 | 0) == ($28 | 0)) {
            break label$111
           }
           $30 = $14 << 6 | 0 | $30 | 0;
          }
          $14 = $14 << 1 | 0;
          if (($14 | 0) < (16 | 0)) {
           continue label$110
          }
          break label$110;
         };
         HEAP32[($49 + ($28 << 2 | 0) | 0) >> 2] = $30;
         $35 = $35 + 1 | 0;
         if (($35 | 0) != ($4 | 0)) {
          continue label$109
         }
         break label$109;
        };
       }
       $37 = $37 + 1 | 0;
       if (($37 | 0) != ($3 | 0)) {
        continue label$107
       }
       break label$107;
      };
     }
     label$112 : {
      if (($5 | 0) < (1 | 0)) {
       break label$112
      }
      $25 = 0;
      $14 = $2;
      $27 = $5;
      label$113 : while (1) {
       label$114 : {
        if (!(HEAP32[$49 >> 2] | 0)) {
         break label$114
        }
        $24 = HEAPU8[$14 >> 0] | 0;
        label$115 : {
         label$116 : {
          switch ((undefined_weak_JS_random_upto(4 | 0) | 0) & 3 | 0 | 0) {
          case 1:
           $24 = ($24 << 1 | 0) & 14 | 0 | (($24 >>> 3 | 0) & 1 | 0) | 0;
           break label$115;
          case 2:
           $24 = ($24 >>> 2 | 0) & 3 | 0 | (($24 << 2 | 0) & 12 | 0) | 0;
           break label$115;
          case 0:
           break label$115;
          default:
           break label$116;
          };
         }
         $24 = ($24 >>> 1 | 0) & 7 | 0 | (($24 << 3 | 0) & 8 | 0) | 0;
        }
        HEAP8[$14 >> 0] = $24;
        $25 = $25 + 1 | 0;
       }
       $49 = $49 + 4 | 0;
       $14 = $14 + 1 | 0;
       $27 = $27 + -1 | 0;
       if ($27) {
        continue label$113
       }
       break label$113;
      };
      if (($25 | 0) > ($32 | 0)) {
       continue label$95
      }
      $32 = $25 ? $25 : $16;
      if ($25) {
       continue label$105
      }
      if ($46) {
       continue label$105
      }
      break label$104;
     }
     break label$105;
    };
    if ($46) {
     continue label$95
    }
    if (!$41) {
     continue label$95
    }
   }
   $25 = 0;
   $30 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
   $27 = 0;
   label$119 : while (1) {
    label$120 : {
     label$121 : {
      if (($4 | 0) > (0 | 0)) {
       break label$121
      }
      $25 = $25 + 1 | 0;
      break label$120;
     }
     $26 = $2 + Math_imul($30, $25) | 0;
     $25 = $25 + 1 | 0;
     $28 = $2 + Math_imul($30, $25) | 0;
     $14 = 0;
     label$122 : while (1) {
      label$123 : {
       $24 = $14 + 1 | 0;
       if (($24 | 0) >= ($4 | 0)) {
        break label$123
       }
       $29 = $26 + $14 | 0;
       $27 = (((((HEAPU8[$29 >> 0] | 0) << 2 | 0) ^ (HEAPU8[($29 + 1 | 0) >> 0] | 0) | 0) >>> 2 | 0) & 1 | 0) + $27 | 0;
      }
      label$124 : {
       if (($25 | 0) >= ($3 | 0)) {
        break label$124
       }
       $27 = $27 + ((((HEAPU8[($26 + $14 | 0) >> 0] | 0) >>> 3 | 0) ^ ((HEAPU8[($28 + $14 | 0) >> 0] | 0) >>> 1 | 0) | 0) & 1 | 0) | 0;
      }
      $14 = $24;
      if (($4 | 0) != ($14 | 0)) {
       continue label$122
      }
      break label$122;
     };
    }
    if (($25 | 0) != ($3 | 0)) {
     continue label$119
    }
    break label$119;
   };
   if (!$27) {
    continue label$95
   }
   break label$95;
  };
  label$125 : {
   label$126 : {
    $51 = Math_fround(Math_fround(HEAPF32[(1088 + 12 | 0) >> 2]) * Math_fround(count234($38 | 0) | 0 | 0));
    if (!(Math_fround(Math_abs($51)) < Math_fround(2147483648.0))) {
     break label$126
    }
    $14 = ~~$51;
    break label$125;
   }
   $14 = -2147483648;
  }
  label$127 : {
   if (($14 | 0) < (1 | 0)) {
    break label$127
   }
   $25 = $14 + 1 | 0;
   label$128 : while (1) {
    $14 = delpos234($38 | 0, undefined_weak_JS_random_upto(count234($38 | 0) | 0 | 0) | 0 | 0) | 0;
    $24 = HEAP32[(1088 + 4 | 0) >> 2] | 0;
    $27 = HEAP32[(0 + 1088 | 0) >> 2] | 0;
    $26 = HEAP32[($14 + 4 | 0) >> 2] | 0;
    $29 = HEAP32[$14 >> 2] | 0;
    $28 = $6 + (Math_imul($27, $26) + $29 | 0) | 0;
    $14 = HEAP32[($14 + 8 | 0) >> 2] | 0;
    HEAP8[$28 >> 0] = HEAPU8[$28 >> 0] | 0 | $14 | 0;
    $24 = $6 + (Math_imul(HEAP32[(0 + 1088 | 0) >> 2] | 0, ($24 + ($26 + (($14 | 0) == (8 | 0) ? 1 : ($14 | 0) == (2 | 0) ? -1 : 0) | 0) | 0 | 0) % ($24 | 0) | 0) + ((($27 + $29 | 0) + (($14 | 0) == (1 | 0) ? 1 : ($14 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($27 | 0) | 0) | 0) | 0;
    HEAP8[$24 >> 0] = HEAPU8[$24 >> 0] | 0 | (($14 >>> 2 | 0) & 3 | 0 | (($14 << 2 | 0) & 12 | 0) | 0) | 0;
    $25 = $25 + -1 | 0;
    if (($25 | 0) > (1 | 0)) {
     continue label$128
    }
    break label$128;
   };
  }
  label$129 : {
   if (!(delpos234($38 | 0, 0 | 0) | 0)) {
    break label$129
   }
   label$130 : while (1) {
    if (delpos234($38 | 0, 0 | 0) | 0) {
     continue label$130
    }
    break label$130;
   };
  }
  freenode234(HEAP32[$38 >> 2] | 0 | 0);
  $29 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = (Math_imul($5, 3) + $29 | 0) + 1 | 0;
  $25 = 0;
  $24 = $29;
  label$131 : while (1) {
   label$132 : {
    if (($4 | 0) < (1 | 0)) {
     break label$132
    }
    $14 = 0;
    label$133 : while (1) {
     HEAP8[$24 >> 0] = HEAPU8[((HEAPU8[($2 + ($14 + Math_imul($25, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) + 1024 | 0) >> 0] | 0;
     $26 = $24 + 1 | 0;
     $27 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
     label$134 : {
      label$135 : {
       if (($14 | 0) < ($10 | 0)) {
        break label$135
       }
       if ($27 & 255 | 0) {
        break label$135
       }
       $27 = 0;
       break label$134;
      }
      if (!((HEAPU8[($6 + ($14 + Math_imul($25, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) & 1 | 0)) {
       break label$134
      }
      HEAP8[($24 + 1 | 0) >> 0] = 118;
      $26 = $24 + 2 | 0;
      $27 = HEAPU8[(1088 + 8 | 0) >> 0] | 0;
     }
     label$136 : {
      label$137 : {
       label$138 : {
        if (($25 | 0) < ($8 | 0)) {
         break label$138
        }
        if (!($27 & 255 | 0)) {
         break label$137
        }
       }
       if (!((HEAPU8[($6 + ($14 + Math_imul($25, HEAP32[(0 + 1088 | 0) >> 2] | 0) | 0) | 0) >> 0] | 0) & 8 | 0)) {
        break label$137
       }
       HEAP8[$26 >> 0] = 104;
       $24 = $26 + 1 | 0;
       break label$136;
      }
      $24 = $26;
     }
     $14 = $14 + 1 | 0;
     if (($4 | 0) != ($14 | 0)) {
      continue label$133
     }
     break label$133;
    };
   }
   $25 = $25 + 1 | 0;
   if (($25 | 0) != ($3 | 0)) {
    continue label$131
   }
   break label$131;
  };
  HEAP8[$24 >> 0] = 0;
  __stack_pointer = $1 + 96 | 0;
  return $29 | 0;
 }
 
 function xyd_cmp_nc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return xyd_cmp($0 | 0, $1 | 0) | 0 | 0;
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
 
 function count234($0) {
  $0 = $0 | 0;
  var $3 = 0, $1 = 0, $2 = 0;
  label$1 : {
   $1 = HEAP32[$0 >> 2] | 0;
   if ($1) {
    break label$1
   }
   return 0 | 0;
  }
  $2 = $1 + 20 | 0;
  $3 = 0;
  $0 = 0;
  label$2 : while (1) {
   $0 = (HEAP32[($2 + $3 | 0) >> 2] | 0) + $0 | 0;
   $3 = $3 + 4 | 0;
   if (($3 | 0) != (16 | 0)) {
    continue label$2
   }
   break label$2;
  };
  $2 = $1 + 36 | 0;
  $3 = 0;
  label$3 : while (1) {
   $0 = $0 + ((HEAP32[($2 + $3 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
   $3 = $3 + 4 | 0;
   if (($3 | 0) != (12 | 0)) {
    continue label$3
   }
   break label$3;
  };
  return $0 | 0;
 }
 
 function delpos234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $6 = 0, $3 = 0, $2 = 0, $4 = 0, $5 = 0;
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
    $5 = $4 + 20 | 0;
    $6 = 0;
    $3 = 0;
    label$3 : while (1) {
     $3 = (HEAP32[($5 + $6 | 0) >> 2] | 0) + $3 | 0;
     $6 = $6 + 4 | 0;
     if (($6 | 0) != (16 | 0)) {
      continue label$3
     }
     break label$3;
    };
    $5 = $4 + 36 | 0;
    $6 = 0;
    label$4 : while (1) {
     $3 = $3 + ((HEAP32[($5 + $6 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
     $6 = $6 + 4 | 0;
     if (($6 | 0) != (12 | 0)) {
      continue label$4
     }
     break label$4;
    };
   }
   if (($3 | 0) <= ($1 | 0)) {
    break label$1
   }
   $2 = delpos234_internal($0 | 0, $1 | 0) | 0;
  }
  return $2 | 0;
 }
 
 function findrelpos234($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $11 = 0, $8 = 0, $7 = 0, $5 = 0, $9 = 0, $10 = 0, $6 = 0;
  label$1 : {
   $5 = HEAP32[$0 >> 2] | 0;
   if (!$5) {
    break label$1
   }
   label$2 : {
    if ($2) {
     break label$2
    }
    $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   }
   $6 = $1 ? 0 : ($3 | 0) == (1 | 0) ? 1 : ($3 | 0) == (3 | 0) ? -1 : 0;
   $7 = 0;
   label$3 : {
    label$4 : while (1) {
     $8 = $5 + 20 | 0;
     $9 = 0;
     label$5 : {
      label$6 : {
       label$7 : while (1) {
        $10 = HEAP32[($8 + 16 | 0) >> 2] | 0;
        if (!$10) {
         break label$6
        }
        $11 = $6;
        label$8 : {
         if ($11) {
          break label$8
         }
         $11 = FUNCTION_TABLE[$2 | 0]($1, $10) | 0;
        }
        if (($11 | 0) < (0 | 0)) {
         break label$6
        }
        label$9 : {
         if (!(HEAP32[($8 + -16 | 0) >> 2] | 0)) {
          break label$9
         }
         $7 = (HEAP32[$8 >> 2] | 0) + $7 | 0;
        }
        label$10 : {
         if (!$11) {
          break label$10
         }
         $8 = $8 + 4 | 0;
         $7 = $7 + 1 | 0;
         $11 = 3;
         $9 = $9 + 1 | 0;
         if (($9 | 0) != (3 | 0)) {
          continue label$7
         }
         break label$5;
        }
        break label$7;
       };
       label$11 : {
        if (($3 & -3 | 0 | 0) == (1 | 0)) {
         break label$11
        }
        label$12 : {
         if (!$4) {
          break label$12
         }
         HEAP32[$4 >> 2] = $7;
        }
        return HEAP32[($8 + 16 | 0) >> 2] | 0 | 0;
       }
       label$13 : {
        if (($3 | 0) != (1 | 0)) {
         break label$13
        }
        $11 = $7 + -1 | 0;
        break label$3;
       }
       $11 = $7 + 1 | 0;
       break label$3;
      }
      $11 = $9;
     }
     $5 = HEAP32[(($5 + ($11 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
     if ($5) {
      continue label$4
     }
     break label$4;
    };
    if (!$3) {
     break label$1
    }
    $11 = $7 - (($3 + -1 | 0) >>> 0 < 2 >>> 0) | 0;
   }
   $8 = index234($0 | 0, $11 | 0) | 0;
   label$14 : {
    if (!$4) {
     break label$14
    }
    if (!$8) {
     break label$14
    }
    HEAP32[$4 >> 2] = $11;
   }
   return $8 | 0;
  }
  return 0 | 0;
 }
 
 function del234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  $3 = 0;
  label$1 : {
   if (!(findrelpos234($0 | 0, $1 | 0, 0 | 0, 0 | 0, $2 + 12 | 0 | 0) | 0)) {
    break label$1
   }
   $3 = delpos234_internal($0 | 0, HEAP32[($2 + 12 | 0) >> 2] | 0 | 0) | 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $3 | 0;
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
  var $11 = 0, $16 = 0, $9 = 0, $10 = 0, $12 = 0, $18 = 0, $8 = 0, $7 = 0, $17 = 0, $19 = 0, $13 = 0, $15 = 0, i64toi32_i32$0 = 0, $14 = 0, i64toi32_i32$1 = 0, $20 = 0, $21 = 0, $95 = 0, $106 = 0, $151 = 0, $162 = 0, $248 = 0, $259 = 0, $466 = 0, $22 = 0;
  $7 = __stack_pointer - 48 | 0;
  __stack_pointer = $7;
  $8 = 0;
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
   HEAP32[$11 >> 2] = $9;
   HEAP32[($11 + 8 | 0) >> 2] = $16;
   HEAP32[($11 + 4 | 0) >> 2] = $10;
   $11 = ($16 << 1 | 0) & 14 | 0 | (($16 >>> 3 | 0) & 1 | 0) | 0;
   $17 = (($10 + $1 | 0) + (($11 | 0) == (8 | 0) ? 1 : ($11 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
   $18 = (($9 + $0 | 0) + (($11 | 0) == (1 | 0) ? 1 : ($11 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
   label$4 : {
    label$5 : {
     if ($3) {
      break label$5
     }
     $19 = $18 - $9 | 0;
     $95 = $19;
     $19 = $19 >> 31 | 0;
     if ((($95 ^ $19 | 0) - $19 | 0) >>> 0 > 1 >>> 0) {
      break label$4
     }
     $19 = $17 - $10 | 0;
     $106 = $19;
     $19 = $19 >> 31 | 0;
     if ((($106 ^ $19 | 0) - $19 | 0) >>> 0 > 1 >>> 0) {
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
      $151 = $11;
      $11 = $11 >> 31 | 0;
      if ((($151 ^ $11 | 0) - $11 | 0) >>> 0 > 1 >>> 0) {
       break label$6
      }
      $11 = $10 - $17 | 0;
      $162 = $11;
      $11 = $11 >> 31 | 0;
      if ((($162 ^ $11 | 0) - $11 | 0) >>> 0 > 1 >>> 0) {
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
  $16 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $16 + $8 | 0;
  wasm2js_memory_copy($16, $14, $8);
  shuffle($16 | 0, $13 | 0, 12 | 0);
  $10 = $13;
  label$8 : {
   label$9 : {
    label$10 : while (1) {
     $8 = HEAP32[($16 + 4 | 0) >> 2] | 0;
     $11 = HEAP32[($16 + 8 | 0) >> 2] | 0;
     $17 = (($8 + $1 | 0) + (($11 | 0) == (8 | 0) ? 1 : ($11 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
     $9 = HEAP32[$16 >> 2] | 0;
     $18 = (($9 + $0 | 0) + (($11 | 0) == (1 | 0) ? 1 : ($11 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
     label$11 : {
      label$12 : {
       if ($3) {
        break label$12
       }
       $12 = $18 - $9 | 0;
       $248 = $12;
       $12 = $12 >> 31 | 0;
       if ((($248 ^ $12 | 0) - $12 | 0) >>> 0 > 1 >>> 0) {
        break label$11
       }
       $12 = $17 - $8 | 0;
       $259 = $12;
       $12 = $12 >> 31 | 0;
       if ((($259 ^ $12 | 0) - $12 | 0) >>> 0 > 1 >>> 0) {
        break label$11
       }
      }
      $4 = $2 + (Math_imul($8, $0) + $9 | 0) | 0;
      $12 = HEAPU8[$4 >> 0] | 0;
      if ($11 & $12 | 0) {
       break label$11
      }
      $12 = $11 | $12 | 0;
      if (($12 & 15 | 0 | 0) == (15 | 0)) {
       break label$11
      }
      $19 = ($11 >>> 2 | 0) & 3 | 0 | (($11 << 2 | 0) & 12 | 0) | 0;
      $18 = $2 + (Math_imul($17, $0) + $18 | 0) | 0;
      if (($19 | ((HEAPU8[$18 >> 0] | 0) & 15 | 0) | 0 | 0) != (15 | 0)) {
       break label$9
      }
     }
     $16 = $16 + 12 | 0;
     $10 = $10 + -1 | 0;
     if ($10) {
      continue label$10
     }
     break label$8;
    };
   }
   HEAP8[$4 >> 0] = $12;
   HEAP8[$18 >> 0] = HEAPU8[$18 >> 0] | 0 | $19 | 0;
   if (!$10) {
    break label$8
   }
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
   $16 = 0;
   label$13 : while (1) {
    $10 = ($7 + 16 | 0) + $16 | 0;
    HEAP32[$10 >> 2] = $9;
    HEAP32[($10 + 8 | 0) >> 2] = $11;
    HEAP32[($10 + 4 | 0) >> 2] = $8;
    $16 = $16 + 12 | 0;
    if (($16 | 0) != (24 | 0)) {
     continue label$13
    }
    break label$13;
   };
   label$14 : while (1) {
    $10 = 1;
    $11 = 0;
    label$15 : while (1) {
     $5 = $11;
     $17 = ($7 + 16 | 0) + Math_imul($11, 12) | 0;
     $20 = HEAP32[($17 + 4 | 0) >> 2] | 0;
     $18 = HEAP32[($17 + 8 | 0) >> 2] | 0;
     $4 = (($20 + $1 | 0) + (($18 | 0) == (8 | 0) ? 1 : ($18 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0;
     $21 = HEAP32[$17 >> 2] | 0;
     $12 = (($21 + $0 | 0) + (($18 | 0) == (1 | 0) ? 1 : ($18 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0;
     $19 = $17 + 8 | 0;
     label$16 : {
      label$17 : {
       $9 = $11 << 2 | 0;
       $8 = ($7 + 8 | 0) + $9 | 0;
       $16 = HEAP32[$8 >> 2] | 0;
       if (($16 | 0) < (1 | 0)) {
        break label$17
       }
       $3 = HEAP32[(($7 + 40 | 0) + $9 | 0) >> 2] | 0;
       $6 = $16 + -1 | 0;
       $11 = $3 + Math_imul($6, 12) | 0;
       if ((HEAP32[$11 >> 2] | 0 | 0) != ($12 | 0)) {
        break label$17
       }
       if ((HEAP32[($11 + 4 | 0) >> 2] | 0 | 0) != ($4 | 0)) {
        break label$17
       }
       $11 = HEAP32[($11 + 8 | 0) >> 2] | 0;
       if (($11 | 0) != (($18 >>> 2 | 0) & 3 | 0 | (($18 << 2 | 0) & 12 | 0) | 0 | 0)) {
        break label$17
       }
       HEAP32[$8 >> 2] = $6;
       break label$16;
      }
      label$18 : {
       label$19 : {
        $11 = $7 + $9 | 0;
        $3 = HEAP32[$11 >> 2] | 0;
        if (($16 | 0) >= ($3 | 0)) {
         break label$19
        }
        $3 = HEAP32[(($7 + 40 | 0) + $9 | 0) >> 2] | 0;
        break label$18;
       }
       $6 = ((Math_imul($3, 3) | 0) / (2 | 0) | 0) + 32 | 0;
       HEAP32[$11 >> 2] = $6;
       $3 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
       $6 = Math_imul($6, 12);
       HEAP32[(0 + 1104 | 0) >> 2] = $3 + $6 | 0;
       label$20 : {
        $11 = ($7 + 40 | 0) + $9 | 0;
        $9 = HEAP32[$11 >> 2] | 0;
        if (!$9) {
         break label$20
        }
        wasm2js_memory_copy($3, $9, $6);
       }
       HEAP32[$11 >> 2] = $3;
      }
      $6 = $16 + 1 | 0;
      HEAP32[$8 >> 2] = $6;
      $11 = $3 + Math_imul($16, 12) | 0;
      i64toi32_i32$0 = HEAP32[$17 >> 2] | 0;
      i64toi32_i32$1 = HEAP32[($17 + 4 | 0) >> 2] | 0;
      $466 = i64toi32_i32$0;
      i64toi32_i32$0 = $11;
      HEAP32[$11 >> 2] = $466;
      HEAP32[($11 + 4 | 0) >> 2] = i64toi32_i32$1;
      HEAP32[($11 + 8 | 0) >> 2] = HEAP32[$19 >> 2] | 0;
      $11 = ($18 >>> 2 | 0) & 3 | 0 | (($18 << 2 | 0) & 12 | 0) | 0;
     }
     $22 = $17 + 4 | 0;
     $8 = HEAPU8[($2 + (Math_imul($4, $0) + $12 | 0) | 0) >> 0] | 0;
     $9 = 4;
     label$21 : {
      label$22 : while (1) {
       label$23 : {
        label$24 : {
         if (!($10 & 1 | 0)) {
          break label$24
         }
         $16 = ($11 >>> 3 | 0) & 1 | 0;
         $11 = ($11 << 1 | 0) & 14 | 0;
         break label$23;
        }
        $16 = ($11 << 3 | 0) & 8 | 0;
        $11 = ($11 >>> 1 | 0) & 7 | 0;
       }
       label$25 : {
        $11 = $11 | $16 | 0;
        if (!($11 & $8 | 0)) {
         break label$25
        }
        HEAP32[$22 >> 2] = $4;
        HEAP32[$17 >> 2] = $12;
        HEAP32[$19 >> 2] = $11;
        break label$21;
       }
       $9 = $9 + -1 | 0;
       if ($9) {
        continue label$22
       }
       break label$22;
      };
      $11 = $18;
      $4 = $20;
      $12 = $21;
     }
     label$26 : {
      label$27 : {
       if (($12 | 0) != (HEAP32[$3 >> 2] | 0 | 0)) {
        break label$27
       }
       if (($4 | 0) != (HEAP32[($3 + 4 | 0) >> 2] | 0 | 0)) {
        break label$27
       }
       if (($11 | 0) == (HEAP32[($3 + 8 | 0) >> 2] | 0 | 0)) {
        break label$26
       }
      }
      $11 = 1;
      $10 = 0;
      if ($5 & 1 | 0) {
       continue label$14
      }
      continue label$15;
     }
     break label$15;
    };
    break label$14;
   };
   $11 = Math_imul(undefined_weak_JS_random_upto($6 + -1 | 0 | 0) | 0, 12) + $3 | 0;
   $9 = HEAP32[($11 + 16 | 0) >> 2] | 0;
   $10 = HEAP32[($11 + 12 | 0) >> 2] | 0;
   $16 = $2 + (Math_imul($9, $0) + $10 | 0) | 0;
   $11 = HEAP32[($11 + 20 | 0) >> 2] | 0;
   HEAP8[$16 >> 0] = (HEAPU8[$16 >> 0] | 0) & ($11 ^ -1 | 0) | 0;
   $16 = 0;
   $9 = $2 + (Math_imul((($9 + $1 | 0) + (($11 | 0) == (8 | 0) ? 1 : ($11 | 0) == (2 | 0) ? -1 : 0) | 0 | 0) % ($1 | 0) | 0, $0) + ((($10 + $0 | 0) + (($11 | 0) == (1 | 0) ? 1 : ($11 | 0) == (4 | 0) ? -1 : 0) | 0 | 0) % ($0 | 0) | 0) | 0) | 0;
   HEAP8[$9 >> 0] = (HEAPU8[$9 >> 0] | 0) & ((($11 >>> 2 | 0) & 3 | 0 | (($11 << 2 | 0) & 12 | 0) | 0) ^ -1 | 0) | 0;
   qsort($14 | 0, $13 | 0, 12 | 0, 3 | 0, 0 | 0);
   $11 = -1;
   $8 = -1;
   label$28 : while (1) {
    label$29 : {
     label$30 : {
      $10 = $16;
      $9 = ($13 | 0) == ($16 | 0);
      if ($9) {
       break label$30
      }
      $18 = HEAP32[($15 + Math_imul($10, 12) | 0) >> 2] | 0;
      if (($18 | 0) <= ($8 | 0)) {
       break label$29
      }
     }
     label$31 : {
      if (($8 | 0) == (-1 | 0)) {
       break label$31
      }
      if (($11 | 0) >= ($1 | 0)) {
       break label$31
      }
      $16 = $1 - $11 | 0;
      $11 = $2 + ($8 + Math_imul($0, $11) | 0) | 0;
      label$32 : while (1) {
       HEAP8[$11 >> 0] = HEAPU8[$11 >> 0] | 0 | 16 | 0;
       $11 = $11 + $0 | 0;
       $16 = $16 + -1 | 0;
       if ($16) {
        continue label$32
       }
       break label$32;
      };
     }
     if ($9) {
      break label$8
     }
     $11 = 0;
     $18 = HEAP32[($15 + Math_imul($10, 12) | 0) >> 2] | 0;
     $8 = $18;
    }
    label$33 : {
     label$34 : {
      $16 = $15 + Math_imul($10, 12) | 0;
      $9 = HEAP32[($16 + 8 | 0) >> 2] | 0;
      if (($9 | 0) == (2 | 0)) {
       break label$34
      }
      if (($9 | 0) != (8 | 0)) {
       break label$33
      }
      label$35 : {
       if (($11 | 0) > (HEAP32[($16 + 4 | 0) >> 2] | 0 | 0)) {
        break label$35
       }
       $9 = $16 + 4 | 0;
       $16 = $11 + -1 | 0;
       $11 = $2 + ($8 + Math_imul($0, $11) | 0) | 0;
       label$36 : while (1) {
        HEAP8[$11 >> 0] = HEAPU8[$11 >> 0] | 0 | 16 | 0;
        $11 = $11 + $0 | 0;
        $16 = $16 + 1 | 0;
        if (($16 | 0) < (HEAP32[$9 >> 2] | 0 | 0)) {
         continue label$36
        }
        break label$36;
       };
      }
      $8 = -1;
      $11 = -1;
      break label$33;
     }
     $11 = HEAP32[($16 + 4 | 0) >> 2] | 0;
     $8 = $18;
    }
    $16 = $10 + 1 | 0;
    if (($13 | 0) != ($10 | 0)) {
     continue label$28
    }
    break label$28;
   };
  }
  __stack_pointer = $7 + 48 | 0;
 }
 
 function net_neighbour($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $6 = 0, $4 = 0, $3 = 0, $5 = 0, $7 = 0, $8 = 0, $69 = 0;
  label$1 : {
   if (($0 | 0) < (0 | 0)) {
    break label$1
   }
   HEAP32[($1 + 16 | 0) >> 2] = 0;
   HEAP32[($1 + 20 | 0) >> 2] = 0;
   $2 = HEAP32[$1 >> 2] | 0;
   $3 = ($0 | 0) / ($2 | 0) | 0;
   $4 = Math_imul($3, $2);
   $5 = HEAP32[($1 + 8 | 0) >> 2] | 0;
   $2 = HEAPU8[($5 + $0 | 0) >> 0] | 0;
   label$2 : {
    $6 = HEAP32[($1 + 12 | 0) >> 2] | 0;
    if (!$6) {
     break label$2
    }
    $2 = $2 & ((HEAPU8[($6 + $0 | 0) >> 0] | 0) ^ -1 | 0) | 0;
   }
   $7 = $0 - $4 | 0;
   $8 = $1 + 24 | 0;
   $4 = $2 & 255 | 0;
   $0 = 1;
   label$3 : while (1) {
    label$4 : {
     if (!($0 & $4 | 0)) {
      break label$4
     }
     $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
     $69 = (((($0 | 0) == (8 | 0) ? 1 : ($0 | 0) == (2 | 0) ? -1 : 0) + $3 | 0) + $2 | 0 | 0) % ($2 | 0) | 0;
     $2 = HEAP32[$1 >> 2] | 0;
     $2 = Math_imul($69, $2) + ((((($0 | 0) == (1 | 0) ? 1 : ($0 | 0) == (4 | 0) ? -1 : 0) + $7 | 0) + $2 | 0 | 0) % ($2 | 0) | 0) | 0;
     if (!((($0 >>> 2 | 0) & 3 | 0 | (($0 << 2 | 0) & 12 | 0) | 0) & (HEAPU8[($5 + $2 | 0) >> 0] | 0) | 0)) {
      break label$4
     }
     $6 = HEAP32[($1 + 20 | 0) >> 2] | 0;
     HEAP32[($1 + 20 | 0) >> 2] = $6 + 1 | 0;
     HEAP32[($8 + ($6 << 2 | 0) | 0) >> 2] = $2;
    }
    $0 = $0 << 1 | 0;
    if (($0 | 0) < (16 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
  $0 = -1;
  label$5 : {
   $2 = HEAP32[($1 + 16 | 0) >> 2] | 0;
   if (($2 | 0) >= (HEAP32[($1 + 20 | 0) >> 2] | 0 | 0)) {
    break label$5
   }
   HEAP32[($1 + 16 | 0) >> 2] = $2 + 1 | 0;
   $0 = HEAP32[(($1 + ($2 << 2 | 0) | 0) + 24 | 0) >> 2] | 0;
  }
  return $0 | 0;
 }
 
 function xyd_cmp($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  label$1 : {
   $2 = HEAP32[$0 >> 2] | 0;
   $3 = HEAP32[$1 >> 2] | 0;
   if (($2 | 0) < ($3 | 0)) {
    break label$1
   }
   $4 = 1;
   label$2 : {
    if (($2 | 0) > ($3 | 0)) {
     break label$2
    }
    $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (($2 | 0) < ($3 | 0)) {
     break label$1
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
  return -1 | 0;
 }
 
 function qsort($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $7 = 0, $8 = 0, $9 = 0, $6 = 0, $5 = 0, $11 = 0, $12 = 0, $10 = 0, $13 = 0, $33 = 0, $224 = 0;
  $5 = __stack_pointer - 192 | 0;
  __stack_pointer = $5;
  label$1 : {
   $6 = Math_imul($2, $1);
   if (!$6) {
    break label$1
   }
   HEAP32[$5 >> 2] = $2;
   HEAP32[($5 + 4 | 0) >> 2] = $2;
   $7 = $5 | 8 | 0;
   $8 = $2;
   $9 = $8;
   label$2 : while (1) {
    $33 = $9 + $2 | 0;
    $9 = $8;
    $8 = $33 + $9 | 0;
    HEAP32[$7 >> 2] = $8;
    $7 = $7 + 4 | 0;
    if ($8 >>> 0 < $6 >>> 0) {
     continue label$2
    }
    break label$2;
   };
   $10 = 0 - $2 | 0;
   label$3 : {
    label$4 : {
     $11 = ($0 + $6 | 0) - $2 | 0;
     if ($11 >>> 0 > $0 >>> 0) {
      break label$4
     }
     $8 = 0;
     $7 = 1;
     $9 = 1;
     break label$3;
    }
    $6 = Math_imul($2, $1 + -1 | 0);
    $8 = 0;
    $7 = 1;
    $9 = 1;
    label$5 : while (1) {
     label$6 : {
      label$7 : {
       if (($7 & 3 | 0 | 0) != (3 | 0)) {
        break label$7
       }
       sift($0 | 0, $2 | 0, $3 | 0, $4 | 0, $9 | 0, $5 | 0);
       $7 = $8 << 30 | 0 | ($7 >>> 2 | 0) | 0;
       $9 = $9 + 2 | 0;
       $8 = $8 >>> 2 | 0;
       break label$6;
      }
      label$8 : {
       label$9 : {
        $1 = $9 + -1 | 0;
        if ((HEAP32[($5 + ($1 << 2 | 0) | 0) >> 2] | 0) >>> 0 < $6 >>> 0) {
         break label$9
        }
        trinkle($0 | 0, $2 | 0, $3 | 0, $4 | 0, $7 | 0, $8 | 0, $9 | 0, 0 | 0, $5 | 0);
        break label$8;
       }
       sift($0 | 0, $2 | 0, $3 | 0, $4 | 0, $9 | 0, $5 | 0);
      }
      label$10 : {
       if (($9 | 0) != (1 | 0)) {
        break label$10
       }
       $8 = $8 << 1 | 0 | ($7 >>> 31 | 0) | 0;
       $7 = $7 << 1 | 0;
       $9 = 0;
       break label$6;
      }
      $12 = $1 >>> 0 > 31 >>> 0;
      $13 = $12 ? 0 : $7;
      $9 = $12 ? $9 + -33 | 0 : $1;
      $8 = $13 >>> (32 - $9 | 0) | 0 | (($12 ? $7 : $8) << $9 | 0) | 0;
      $7 = $13 << $9 | 0;
      $9 = 1;
     }
     $6 = $6 - $2 | 0;
     $7 = $7 | 1 | 0;
     $0 = $0 + $2 | 0;
     if ($0 >>> 0 < $11 >>> 0) {
      continue label$5
     }
     break label$5;
    };
   }
   trinkle($0 | 0, $2 | 0, $3 | 0, $4 | 0, $7 | 0, $8 | 0, $9 | 0, 0 | 0, $5 | 0);
   $11 = $0 + $10 | 0;
   label$11 : while (1) {
    label$12 : {
     label$13 : {
      label$14 : {
       label$15 : {
        if (($9 | 0) != (1 | 0)) {
         break label$15
        }
        if (($7 | 0) != (1 | 0)) {
         break label$15
        }
        if ($8) {
         break label$14
        }
        break label$1;
       }
       if (($9 | 0) > (1 | 0)) {
        break label$13
       }
      }
      label$16 : {
       label$17 : {
        label$18 : {
         $0 = Math_imul((1 - $7 | 0) & ($7 + -1 | 0) | 0, 124511785);
         if ($0 >>> 0 > 134217727 >>> 0) {
          break label$18
         }
         $6 = 0;
         label$19 : {
          $0 = Math_imul($8 & (0 - $8 | 0) | 0, 124511785);
          if ($0 >>> 0 >= 134217728 >>> 0) {
           break label$19
          }
          $1 = $8;
          $8 = $7;
          $0 = 0;
          break label$16;
         }
         $6 = (HEAP8[(($0 >>> 27 | 0) + 1056 | 0) >> 0] | 0) + 32 | 0;
         break label$17;
        }
        $6 = HEAP8[(($0 >>> 27 | 0) + 1056 | 0) >> 0] | 0;
       }
       label$20 : {
        if ($6 >>> 0 >= 32 >>> 0) {
         break label$20
        }
        $1 = $8;
        $8 = $7;
        $0 = $6;
        break label$16;
       }
       $0 = $6 + -32 | 0;
       $1 = 0;
      }
      $7 = $1 << (32 - $0 | 0) | 0 | ($8 >>> $0 | 0) | 0;
      $9 = $6 + $9 | 0;
      $8 = $1 >>> $0 | 0;
      break label$12;
     }
     $0 = $9 + -1 | 0;
     $9 = $9 + -2 | 0;
     $224 = ($7 << 1 | 0) & 2147483646 | 0;
     $7 = $7 >>> 30 | 0;
     $6 = ($224 | ($7 << 31 | 0) | 0) ^ 3 | 0;
     $8 = $8 << 2 | 0 | $7 | 0;
     trinkle($11 - (HEAP32[($5 + ($9 << 2 | 0) | 0) >> 2] | 0) | 0 | 0, $2 | 0, $3 | 0, $4 | 0, $6 | 0, $8 >>> 1 | 0 | 0, $0 | 0, 1 | 0, $5 | 0);
     $7 = $6 << 1 | 0 | 1 | 0;
     trinkle($11 | 0, $2 | 0, $3 | 0, $4 | 0, $7 | 0, $8 | 0, $9 | 0, 1 | 0, $5 | 0);
    }
    $11 = $11 + $10 | 0;
    continue label$11;
   };
  }
  __stack_pointer = $5 + 192 | 0;
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
  label$1 : {
   if (!$2) {
    break label$1
   }
   label$2 : while (1) {
    HEAP8[$0 >> 0] = $1;
    $0 = $0 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
 }
 
 function memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   $3 = $0;
   label$2 : while (1) {
    HEAP8[$3 >> 0] = HEAPU8[$1 >> 0] | 0;
    $1 = $1 + 1 | 0;
    $3 = $3 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0 | 0;
 }
 
 function sift($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $10 = 0, $6 = 0, $11 = 0, $7 = 0, $9 = 0, $12 = 0, $8 = 0;
  $6 = __stack_pointer - 240 | 0;
  __stack_pointer = $6;
  HEAP32[$6 >> 2] = $0;
  $7 = 1;
  label$1 : {
   if (($4 | 0) < (2 | 0)) {
    break label$1
   }
   $8 = 0 - $1 | 0;
   $9 = $6 | 4 | 0;
   $7 = 1;
   $10 = $0;
   label$2 : while (1) {
    label$3 : {
     $11 = $10 + $8 | 0;
     $12 = $4 + -2 | 0;
     $10 = $11 - (HEAP32[($5 + ($12 << 2 | 0) | 0) >> 2] | 0) | 0;
     if ((FUNCTION_TABLE[$2 | 0]($0, $10, $3) | 0 | 0) < (0 | 0)) {
      break label$3
     }
     if ((FUNCTION_TABLE[$2 | 0]($0, $11, $3) | 0 | 0) > (-1 | 0)) {
      break label$1
     }
    }
    label$4 : {
     label$5 : {
      if ((FUNCTION_TABLE[$2 | 0]($10, $11, $3) | 0 | 0) < (0 | 0)) {
       break label$5
      }
      HEAP32[$9 >> 2] = $10;
      $4 = $4 + -1 | 0;
      break label$4;
     }
     HEAP32[$9 >> 2] = $11;
     $4 = $12;
     $10 = $11;
    }
    $9 = $9 + 4 | 0;
    $7 = $7 + 1 | 0;
    if (($4 | 0) > (1 | 0)) {
     continue label$2
    }
    break label$2;
   };
  }
  cycle($1 | 0, $6 | 0, $7 | 0);
  __stack_pointer = $6 + 240 | 0;
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
  var $10 = 0, $13 = 0, $14 = 0, $16 = 0, $9 = 0, $12 = 0, $15 = 0, $11 = 0;
  $9 = __stack_pointer - 240 | 0;
  __stack_pointer = $9;
  HEAP32[$9 >> 2] = $0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if ($5) {
        break label$5
       }
       if (($4 | 0) == (1 | 0)) {
        break label$4
       }
      }
      $10 = $0 - (HEAP32[($8 + ($6 << 2 | 0) | 0) >> 2] | 0) | 0;
      if ((FUNCTION_TABLE[$2 | 0]($10, $0, $3) | 0 | 0) < (1 | 0)) {
       break label$4
      }
      $11 = 0 - $1 | 0;
      $12 = $9 | 4 | 0;
      $13 = !$7;
      $14 = 1;
      $15 = $0;
      label$6 : {
       label$7 : while (1) {
        $16 = $14;
        $7 = $10;
        label$8 : {
         if (!($13 & 1 | 0)) {
          break label$8
         }
         if (($6 | 0) < (2 | 0)) {
          break label$8
         }
         $10 = HEAP32[((($6 << 2 | 0) + $8 | 0) + -8 | 0) >> 2] | 0;
         $13 = $15 + $11 | 0;
         if ((FUNCTION_TABLE[$2 | 0]($13, $7, $3) | 0 | 0) > (-1 | 0)) {
          break label$3
         }
         if ((FUNCTION_TABLE[$2 | 0]($13 - $10 | 0, $7, $3) | 0 | 0) > (-1 | 0)) {
          break label$3
         }
        }
        HEAP32[$12 >> 2] = $7;
        label$9 : {
         label$10 : {
          label$11 : {
           $10 = Math_imul((1 - $4 | 0) & ($4 + -1 | 0) | 0, 124511785);
           if ($10 >>> 0 > 134217727 >>> 0) {
            break label$11
           }
           $10 = 0;
           label$12 : {
            $13 = Math_imul($5 & (0 - $5 | 0) | 0, 124511785);
            if ($13 >>> 0 >= 134217728 >>> 0) {
             break label$12
            }
            $13 = 0;
            break label$9;
           }
           $10 = (HEAP8[(($13 >>> 27 | 0) + 1056 | 0) >> 0] | 0) + 32 | 0;
           break label$10;
          }
          $10 = HEAP8[(($10 >>> 27 | 0) + 1056 | 0) >> 0] | 0;
         }
         $14 = $10 >>> 0 > 31 >>> 0;
         $13 = $14 ? $10 + -32 | 0 : $10;
         $4 = $14 ? $5 : $4;
         $5 = $14 ? 0 : $5;
        }
        $14 = $16 + 1 | 0;
        $4 = $5 << (32 - $13 | 0) | 0 | ($4 >>> $13 | 0) | 0;
        $6 = $10 + $6 | 0;
        label$13 : {
         $5 = $5 >>> $13 | 0;
         if ($5) {
          break label$13
         }
         if (($4 | 0) != (1 | 0)) {
          break label$13
         }
         $16 = $14;
         break label$6;
        }
        $12 = $12 + 4 | 0;
        $13 = 1;
        $15 = $7;
        $10 = $7 - (HEAP32[($8 + ($6 << 2 | 0) | 0) >> 2] | 0) | 0;
        if ((FUNCTION_TABLE[$2 | 0]($10, $0, $3) | 0 | 0) >= (1 | 0)) {
         continue label$7
        }
        break label$7;
       };
       $16 = $16 + 1 | 0;
      }
      $0 = $7;
      break label$2;
     }
     if ($7) {
      break label$1
     }
     $16 = 1;
     break label$2;
    }
    $0 = $15;
   }
   cycle($1 | 0, $9 | 0, $16 | 0);
   sift($0 | 0, $1 | 0, $2 | 0, $3 | 0, $6 | 0, $8 | 0);
  }
  __stack_pointer = $9 + 240 | 0;
 }
 
 function cycle($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $6 = 0, $7 = 0, $4 = 0, $8 = 0;
  $3 = __stack_pointer - 256 | 0;
  __stack_pointer = $3;
  label$1 : {
   if (($2 | 0) < (2 | 0)) {
    break label$1
   }
   $4 = $1 + ($2 << 2 | 0) | 0;
   HEAP32[$4 >> 2] = $3;
   if (!$0) {
    break label$1
   }
   $5 = $3;
   label$2 : while (1) {
    $6 = $0 >>> 0 < 256 >>> 0 ? $0 : 256;
    wasm2js_memory_copy($5, HEAP32[$1 >> 2] | 0, $6);
    $5 = $1;
    $7 = $2;
    label$3 : while (1) {
     $8 = $5 + 4 | 0;
     wasm2js_memory_copy(HEAP32[$5 >> 2] | 0, HEAP32[$8 >> 2] | 0, $6);
     HEAP32[$5 >> 2] = (HEAP32[$5 >> 2] | 0) + $6 | 0;
     $5 = $8;
     $7 = $7 + -1 | 0;
     if ($7) {
      continue label$3
     }
     break label$3;
    };
    $0 = $0 - $6 | 0;
    if (!$0) {
     break label$1
    }
    $5 = HEAP32[$4 >> 2] | 0;
    continue label$2;
   };
  }
  __stack_pointer = $3 + 256 | 0;
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
 
 function add234_insert($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $8 = 0, $7 = 0, $9 = 0, $6 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $10 = 0, $11 = 0, $12 = 0, i64toi32_i32$2 = 0, $90 = 0, $103 = 0, $220 = 0, $257 = 0;
  $6 = 0;
  $7 = 0;
  label$1 : {
   if (!$0) {
    break label$1
   }
   $8 = $0 + 20 | 0;
   $9 = 0;
   $7 = 0;
   label$2 : while (1) {
    $7 = (HEAP32[($8 + $9 | 0) >> 2] | 0) + $7 | 0;
    $9 = $9 + 4 | 0;
    if (($9 | 0) != (16 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $8 = $0 + 36 | 0;
   $9 = 0;
   label$3 : while (1) {
    $7 = $7 + ((HEAP32[($8 + $9 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $9 = $9 + 4 | 0;
    if (($9 | 0) != (12 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   if (!$2) {
    break label$4
   }
   $8 = $2 + 20 | 0;
   $9 = 0;
   $6 = 0;
   label$5 : while (1) {
    $6 = (HEAP32[($8 + $9 | 0) >> 2] | 0) + $6 | 0;
    $9 = $9 + 4 | 0;
    if (($9 | 0) != (16 | 0)) {
     continue label$5
    }
    break label$5;
   };
   $8 = $2 + 36 | 0;
   $9 = 0;
   label$6 : while (1) {
    $6 = $6 + ((HEAP32[($8 + $9 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $9 = $9 + 4 | 0;
    if (($9 | 0) != (12 | 0)) {
     continue label$6
    }
    break label$6;
   };
  }
  label$7 : {
   label$8 : {
    label$9 : {
     if ($4) {
      break label$9
     }
     $10 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     break label$8;
    }
    $11 = $4 + 36 | 0;
    label$10 : {
     label$11 : {
      label$12 : {
       $9 = $4 + 40 | 0;
       $10 = HEAP32[$9 >> 2] | 0;
       if ($10) {
        break label$12
       }
       $8 = $2;
       break label$11;
      }
      label$13 : {
       label$14 : while (1) {
        $12 = $0;
        label$15 : {
         $8 = $4;
         if (HEAP32[($8 + 44 | 0) >> 2] | 0) {
          break label$15
         }
         label$16 : {
          label$17 : {
           switch ($5 | 0) {
           case 0:
            HEAP32[($8 + 44 | 0) >> 2] = $10;
            $0 = $8 + 8 | 0;
            i64toi32_i32$2 = $0;
            i64toi32_i32$0 = HEAP32[$0 >> 2] | 0;
            i64toi32_i32$1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
            $90 = i64toi32_i32$0;
            i64toi32_i32$0 = $8 + 12 | 0;
            HEAP32[i64toi32_i32$0 >> 2] = $90;
            HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
            HEAP32[$9 >> 2] = HEAP32[$11 >> 2] | 0;
            HEAP32[$0 >> 2] = $2;
            HEAP32[$11 >> 2] = $1;
            $9 = $8 + 24 | 0;
            i64toi32_i32$2 = $9;
            i64toi32_i32$1 = HEAP32[$9 >> 2] | 0;
            i64toi32_i32$0 = HEAP32[($9 + 4 | 0) >> 2] | 0;
            $103 = i64toi32_i32$1;
            i64toi32_i32$1 = $8 + 28 | 0;
            HEAP32[i64toi32_i32$1 >> 2] = $103;
            HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
            HEAP32[$9 >> 2] = $6;
            HEAP32[($8 + 4 | 0) >> 2] = $12;
            $6 = $8 + 20 | 0;
            break label$16;
           case 1:
            HEAP32[($8 + 44 | 0) >> 2] = $10;
            $0 = $8 + 12 | 0;
            HEAP32[($8 + 16 | 0) >> 2] = HEAP32[$0 >> 2] | 0;
            HEAP32[$0 >> 2] = $2;
            HEAP32[$9 >> 2] = $1;
            $9 = $8 + 28 | 0;
            $0 = HEAP32[$9 >> 2] | 0;
            HEAP32[$9 >> 2] = $6;
            HEAP32[($8 + 32 | 0) >> 2] = $0;
            HEAP32[($8 + 8 | 0) >> 2] = $12;
            $6 = $8 + 24 | 0;
            break label$16;
           default:
            break label$17;
           };
          }
          HEAP32[($8 + 44 | 0) >> 2] = $1;
          HEAP32[($8 + 32 | 0) >> 2] = $6;
          HEAP32[($8 + 16 | 0) >> 2] = $2;
          HEAP32[($8 + 12 | 0) >> 2] = $12;
          $6 = $8 + 28 | 0;
         }
         HEAP32[$6 >> 2] = $7;
         label$20 : {
          $7 = HEAP32[($8 + 4 | 0) >> 2] | 0;
          if (!$7) {
           break label$20
          }
          HEAP32[$7 >> 2] = $8;
         }
         label$21 : {
          $7 = HEAP32[($8 + 8 | 0) >> 2] | 0;
          if (!$7) {
           break label$21
          }
          HEAP32[$7 >> 2] = $8;
         }
         label$22 : {
          $7 = HEAP32[($8 + 12 | 0) >> 2] | 0;
          if (!$7) {
           break label$22
          }
          HEAP32[$7 >> 2] = $8;
         }
         $7 = HEAP32[($8 + 16 | 0) >> 2] | 0;
         if (!$7) {
          break label$13
         }
         HEAP32[$7 >> 2] = $8;
         break label$13;
        }
        $0 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
        HEAP32[$0 >> 2] = HEAP32[$8 >> 2] | 0;
        $10 = $0 + 48 | 0;
        HEAP32[(0 + 1104 | 0) >> 2] = $10;
        label$23 : {
         label$24 : {
          switch ($5 | 0) {
          case 0:
           HEAP32[($0 + 36 | 0) >> 2] = $1;
           HEAP32[($0 + 4 | 0) >> 2] = $12;
           HEAP32[($0 + 8 | 0) >> 2] = $2;
           HEAP32[($0 + 40 | 0) >> 2] = HEAP32[$11 >> 2] | 0;
           $4 = $8 + 8 | 0;
           HEAP32[($0 + 12 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
           HEAP32[($0 + 20 | 0) >> 2] = $7;
           HEAP32[($0 + 24 | 0) >> 2] = $6;
           $1 = HEAP32[$9 >> 2] | 0;
           HEAP32[($8 + 4 | 0) >> 2] = HEAP32[($8 + 12 | 0) >> 2] | 0;
           HEAP32[($0 + 28 | 0) >> 2] = HEAP32[($8 + 24 | 0) >> 2] | 0;
           HEAP32[$11 >> 2] = HEAP32[($8 + 44 | 0) >> 2] | 0;
           i64toi32_i32$2 = $8 + 28 | 0;
           i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $220 = i64toi32_i32$0;
           i64toi32_i32$0 = $8;
           HEAP32[($8 + 20 | 0) >> 2] = $220;
           HEAP32[($8 + 24 | 0) >> 2] = i64toi32_i32$1;
           HEAP32[$4 >> 2] = HEAP32[($8 + 16 | 0) >> 2] | 0;
           break label$23;
          case 1:
           HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($8 + 4 | 0) >> 2] | 0;
           $4 = HEAP32[$11 >> 2] | 0;
           HEAP32[($0 + 40 | 0) >> 2] = $1;
           HEAP32[($0 + 8 | 0) >> 2] = $12;
           HEAP32[($0 + 36 | 0) >> 2] = $4;
           HEAP32[($0 + 12 | 0) >> 2] = $2;
           $1 = HEAP32[$9 >> 2] | 0;
           HEAP32[($8 + 4 | 0) >> 2] = HEAP32[($8 + 12 | 0) >> 2] | 0;
           HEAP32[($0 + 20 | 0) >> 2] = HEAP32[($8 + 20 | 0) >> 2] | 0;
           HEAP32[($0 + 28 | 0) >> 2] = $6;
           HEAP32[($0 + 24 | 0) >> 2] = $7;
           HEAP32[$11 >> 2] = HEAP32[($8 + 44 | 0) >> 2] | 0;
           i64toi32_i32$2 = $8 + 28 | 0;
           i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
           i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
           $257 = i64toi32_i32$1;
           i64toi32_i32$1 = $8;
           HEAP32[($8 + 20 | 0) >> 2] = $257;
           HEAP32[($8 + 24 | 0) >> 2] = i64toi32_i32$0;
           HEAP32[($8 + 8 | 0) >> 2] = HEAP32[($8 + 16 | 0) >> 2] | 0;
           break label$23;
          default:
           break label$24;
          };
         }
         HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($8 + 4 | 0) >> 2] | 0;
         HEAP32[($0 + 36 | 0) >> 2] = HEAP32[$11 >> 2] | 0;
         HEAP32[($0 + 20 | 0) >> 2] = HEAP32[($8 + 20 | 0) >> 2] | 0;
         HEAP32[($0 + 8 | 0) >> 2] = HEAP32[($8 + 8 | 0) >> 2] | 0;
         HEAP32[($0 + 24 | 0) >> 2] = HEAP32[($8 + 24 | 0) >> 2] | 0;
         HEAP32[($0 + 40 | 0) >> 2] = HEAP32[$9 >> 2] | 0;
         label$27 : {
          if (($5 | 0) != (2 | 0)) {
           break label$27
          }
          HEAP32[($0 + 12 | 0) >> 2] = $12;
          HEAP32[($8 + 4 | 0) >> 2] = $2;
          HEAP32[($0 + 28 | 0) >> 2] = $7;
          HEAP32[$11 >> 2] = HEAP32[($8 + 44 | 0) >> 2] | 0;
          HEAP32[($8 + 20 | 0) >> 2] = $6;
          HEAP32[($8 + 24 | 0) >> 2] = HEAP32[($8 + 32 | 0) >> 2] | 0;
          HEAP32[($8 + 8 | 0) >> 2] = HEAP32[($8 + 16 | 0) >> 2] | 0;
          break label$23;
         }
         HEAP32[($0 + 12 | 0) >> 2] = HEAP32[($8 + 12 | 0) >> 2] | 0;
         HEAP32[($8 + 4 | 0) >> 2] = $12;
         HEAP32[($0 + 28 | 0) >> 2] = HEAP32[($8 + 28 | 0) >> 2] | 0;
         HEAP32[$11 >> 2] = $1;
         HEAP32[($8 + 20 | 0) >> 2] = $7;
         HEAP32[($8 + 24 | 0) >> 2] = $6;
         HEAP32[($8 + 8 | 0) >> 2] = $2;
         $1 = HEAP32[($8 + 44 | 0) >> 2] | 0;
        }
        i64toi32_i32$1 = $8 + 12 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[($0 + 16 | 0) >> 2] = 0;
        HEAP32[$9 >> 2] = 0;
        i64toi32_i32$1 = $8 + 28 | 0;
        i64toi32_i32$0 = 0;
        HEAP32[i64toi32_i32$1 >> 2] = 0;
        HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
        HEAP32[($8 + 44 | 0) >> 2] = 0;
        HEAP32[($0 + 32 | 0) >> 2] = 0;
        HEAP32[($0 + 44 | 0) >> 2] = 0;
        label$28 : {
         $7 = HEAP32[($0 + 4 | 0) >> 2] | 0;
         if (!$7) {
          break label$28
         }
         HEAP32[$7 >> 2] = $0;
        }
        label$29 : {
         $7 = HEAP32[($0 + 8 | 0) >> 2] | 0;
         if (!$7) {
          break label$29
         }
         HEAP32[$7 >> 2] = $0;
        }
        label$30 : {
         $7 = HEAP32[($0 + 12 | 0) >> 2] | 0;
         if (!$7) {
          break label$30
         }
         HEAP32[$7 >> 2] = $0;
        }
        label$31 : {
         $7 = HEAP32[($8 + 4 | 0) >> 2] | 0;
         if (!$7) {
          break label$31
         }
         HEAP32[$7 >> 2] = $8;
        }
        label$32 : {
         $7 = HEAP32[($8 + 8 | 0) >> 2] | 0;
         if (!$7) {
          break label$32
         }
         HEAP32[$7 >> 2] = $8;
        }
        $7 = 0;
        $6 = 20;
        label$33 : while (1) {
         $7 = (HEAP32[($0 + $6 | 0) >> 2] | 0) + $7 | 0;
         $6 = $6 + 4 | 0;
         if (($6 | 0) != (36 | 0)) {
          continue label$33
         }
         break label$33;
        };
        $6 = 36;
        label$34 : while (1) {
         $7 = $7 + ((HEAP32[($0 + $6 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
         $6 = $6 + 4 | 0;
         if (($6 | 0) != (48 | 0)) {
          continue label$34
         }
         break label$34;
        };
        $6 = 0;
        $9 = 20;
        label$35 : while (1) {
         $6 = (HEAP32[($8 + $9 | 0) >> 2] | 0) + $6 | 0;
         $9 = $9 + 4 | 0;
         if (($9 | 0) != (36 | 0)) {
          continue label$35
         }
         break label$35;
        };
        $9 = 36;
        label$36 : while (1) {
         $6 = $6 + ((HEAP32[($8 + $9 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
         $9 = $9 + 4 | 0;
         if (($9 | 0) != (48 | 0)) {
          continue label$36
         }
         break label$36;
        };
        label$37 : {
         $4 = HEAP32[$8 >> 2] | 0;
         if ($4) {
          break label$37
         }
         $2 = $8;
         break label$8;
        }
        label$38 : {
         label$39 : {
          if ((HEAP32[($4 + 4 | 0) >> 2] | 0 | 0) != ($8 | 0)) {
           break label$39
          }
          $5 = 0;
          break label$38;
         }
         label$40 : {
          if ((HEAP32[($4 + 8 | 0) >> 2] | 0 | 0) != ($8 | 0)) {
           break label$40
          }
          $5 = 1;
          break label$38;
         }
         $5 = (HEAP32[($4 + 12 | 0) >> 2] | 0 | 0) == ($8 | 0) ? 2 : 3;
        }
        $11 = $4 + 36 | 0;
        $2 = $8;
        $9 = $4 + 40 | 0;
        $10 = HEAP32[$9 >> 2] | 0;
        if (!$10) {
         break label$11
        }
        continue label$14;
       };
      }
      $4 = $8;
      break label$10;
     }
     label$41 : {
      label$42 : {
       if ($5) {
        break label$42
       }
       $2 = $4 + 8 | 0;
       HEAP32[($4 + 12 | 0) >> 2] = HEAP32[$2 >> 2] | 0;
       HEAP32[$9 >> 2] = HEAP32[$11 >> 2] | 0;
       HEAP32[$2 >> 2] = $8;
       HEAP32[$11 >> 2] = $1;
       HEAP32[($4 + 20 | 0) >> 2] = $7;
       $7 = $4 + 24 | 0;
       $9 = HEAP32[$7 >> 2] | 0;
       HEAP32[$7 >> 2] = $6;
       HEAP32[($4 + 28 | 0) >> 2] = $9;
       HEAP32[($4 + 4 | 0) >> 2] = $0;
       break label$41;
      }
      HEAP32[($4 + 12 | 0) >> 2] = $8;
      HEAP32[$9 >> 2] = $1;
      HEAP32[($4 + 28 | 0) >> 2] = $6;
      HEAP32[($4 + 24 | 0) >> 2] = $7;
      HEAP32[($4 + 8 | 0) >> 2] = $0;
      $8 = $0;
      $0 = HEAP32[($4 + 4 | 0) >> 2] | 0;
     }
     label$43 : {
      if (!$0) {
       break label$43
      }
      HEAP32[$0 >> 2] = $4;
      $8 = HEAP32[($4 + 8 | 0) >> 2] | 0;
     }
     label$44 : {
      if (!$8) {
       break label$44
      }
      HEAP32[$8 >> 2] = $4;
     }
     $7 = HEAP32[($4 + 12 | 0) >> 2] | 0;
     if (!$7) {
      break label$10
     }
     HEAP32[$7 >> 2] = $4;
    }
    label$45 : {
     $7 = HEAP32[$4 >> 2] | 0;
     if ($7) {
      break label$45
     }
     return 0 | 0;
    }
    label$46 : while (1) {
     $9 = $4;
     $4 = $7;
     $6 = 20;
     $7 = 0;
     label$47 : while (1) {
      $7 = (HEAP32[($9 + $6 | 0) >> 2] | 0) + $7 | 0;
      $6 = $6 + 4 | 0;
      if (($6 | 0) != (36 | 0)) {
       continue label$47
      }
      break label$47;
     };
     $6 = 36;
     label$48 : while (1) {
      $7 = $7 + ((HEAP32[($9 + $6 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
      $6 = $6 + 4 | 0;
      if (($6 | 0) != (48 | 0)) {
       continue label$48
      }
      break label$48;
     };
     $8 = 0;
     $6 = 0;
     label$49 : {
      if ((HEAP32[($4 + 4 | 0) >> 2] | 0 | 0) == ($9 | 0)) {
       break label$49
      }
      label$50 : {
       if ((HEAP32[($4 + 8 | 0) >> 2] | 0 | 0) != ($9 | 0)) {
        break label$50
       }
       $6 = 1;
       break label$49;
      }
      $6 = (HEAP32[($4 + 12 | 0) >> 2] | 0 | 0) == ($9 | 0) ? 2 : 3;
     }
     HEAP32[(($4 + ($6 << 2 | 0) | 0) + 20 | 0) >> 2] = $7;
     $7 = HEAP32[$4 >> 2] | 0;
     if ($7) {
      continue label$46
     }
     break label$7;
    };
   }
   HEAP32[$3 >> 2] = $10;
   HEAP32[($10 + 4 | 0) >> 2] = $0;
   HEAP32[($10 + 36 | 0) >> 2] = $1;
   HEAP32[((HEAP32[$3 >> 2] | 0) + 8 | 0) >> 2] = $2;
   $9 = HEAP32[$3 >> 2] | 0;
   HEAP32[($9 + 40 | 0) >> 2] = 0;
   HEAP32[((HEAP32[$3 >> 2] | 0) + 12 | 0) >> 2] = 0;
   HEAP32[($10 + 20 | 0) >> 2] = $7;
   $7 = HEAP32[$3 >> 2] | 0;
   HEAP32[($7 + 44 | 0) >> 2] = 0;
   HEAP32[($9 + 24 | 0) >> 2] = $6;
   HEAP32[((HEAP32[$3 >> 2] | 0) + 16 | 0) >> 2] = 0;
   HEAP32[($7 + 28 | 0) >> 2] = 0;
   $7 = HEAP32[$3 >> 2] | 0;
   HEAP32[$7 >> 2] = 0;
   HEAP32[(0 + 1104 | 0) >> 2] = $10 + 48 | 0;
   HEAP32[($7 + 32 | 0) >> 2] = 0;
   label$51 : {
    $7 = HEAP32[$3 >> 2] | 0;
    $6 = HEAP32[($7 + 4 | 0) >> 2] | 0;
    if (!$6) {
     break label$51
    }
    HEAP32[$6 >> 2] = $7;
    $7 = HEAP32[$3 >> 2] | 0;
   }
   $8 = 1;
   $6 = HEAP32[($7 + 8 | 0) >> 2] | 0;
   if (!$6) {
    break label$7
   }
   HEAP32[$6 >> 2] = $7;
   return 1 | 0;
  }
  return $8 | 0;
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
   $3 = HEAP32[$0 >> 2] | 0;
   if (!$3) {
    break label$1
   }
   $0 = 0;
   $2 = 20;
   label$2 : while (1) {
    $0 = (HEAP32[($3 + $2 | 0) >> 2] | 0) + $0 | 0;
    $2 = $2 + 4 | 0;
    if (($2 | 0) != (36 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $2 = 36;
   label$3 : while (1) {
    $0 = $0 + ((HEAP32[($3 + $2 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $2 = $2 + 4 | 0;
    if (($2 | 0) != (48 | 0)) {
     continue label$3
    }
    break label$3;
   };
   $2 = 0;
   if (($0 | 0) <= ($1 | 0)) {
    break label$1
   }
   label$4 : while (1) {
    label$5 : {
     label$6 : {
      $0 = HEAP32[($3 + 20 | 0) >> 2] | 0;
      if (($1 | 0) >= ($0 | 0)) {
       break label$6
      }
      $0 = $3 + 4 | 0;
      break label$5;
     }
     label$7 : {
      label$8 : {
       label$9 : {
        $1 = $1 + ($0 ^ -1 | 0) | 0;
        if (($1 | 0) > (-1 | 0)) {
         break label$9
        }
        $0 = $3 + 36 | 0;
        break label$8;
       }
       label$10 : {
        $0 = HEAP32[($3 + 24 | 0) >> 2] | 0;
        if (($1 | 0) >= ($0 | 0)) {
         break label$10
        }
        $0 = $3 + 8 | 0;
        break label$5;
       }
       label$11 : {
        $1 = $1 + ($0 ^ -1 | 0) | 0;
        if (($1 | 0) > (-1 | 0)) {
         break label$11
        }
        $0 = $3 + 40 | 0;
        break label$8;
       }
       label$12 : {
        $0 = HEAP32[($3 + 28 | 0) >> 2] | 0;
        if (($1 | 0) >= ($0 | 0)) {
         break label$12
        }
        $0 = $3 + 12 | 0;
        break label$5;
       }
       $1 = $1 + ($0 ^ -1 | 0) | 0;
       if (($1 | 0) > (-1 | 0)) {
        break label$7
       }
       $0 = $3 + 44 | 0;
      }
      return HEAP32[$0 >> 2] | 0 | 0;
     }
     $0 = $3 + 16 | 0;
    }
    $3 = HEAP32[$0 >> 2] | 0;
    if ($3) {
     continue label$4
    }
    break label$4;
   };
  }
  return $2 | 0;
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
 
 function delpos234_internal($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $5 = 0, $3 = 0, $6 = 0, $8 = 0, $4 = 0, $7 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[($2 + 12 | 0) >> 2] = $1;
  $3 = HEAP32[$0 >> 2] | 0;
  $4 = 0;
  label$1 : while (1) {
   label$2 : {
    label$3 : {
     $5 = HEAP32[($3 + 20 | 0) >> 2] | 0;
     if (($1 | 0) > ($5 | 0)) {
      break label$3
     }
     HEAP32[($2 + 8 | 0) >> 2] = 0;
     break label$2;
    }
    $1 = $1 + ($5 ^ -1 | 0) | 0;
    HEAP32[($2 + 12 | 0) >> 2] = $1;
    label$4 : {
     $5 = HEAP32[($3 + 24 | 0) >> 2] | 0;
     if (($1 | 0) > ($5 | 0)) {
      break label$4
     }
     HEAP32[($2 + 8 | 0) >> 2] = 1;
     break label$2;
    }
    $1 = $1 + ($5 ^ -1 | 0) | 0;
    HEAP32[($2 + 12 | 0) >> 2] = $1;
    label$5 : {
     $5 = HEAP32[($3 + 28 | 0) >> 2] | 0;
     if (($1 | 0) > ($5 | 0)) {
      break label$5
     }
     HEAP32[($2 + 8 | 0) >> 2] = 2;
     break label$2;
    }
    $1 = $1 + ($5 ^ -1 | 0) | 0;
    HEAP32[($2 + 12 | 0) >> 2] = $1;
    if (($1 | 0) > (HEAP32[($3 + 32 | 0) >> 2] | 0 | 0)) {
     break label$2
    }
    HEAP32[($2 + 8 | 0) >> 2] = 3;
   }
   label$6 : {
    label$7 : {
     label$8 : {
      if (!(HEAP32[($3 + 4 | 0) >> 2] | 0)) {
       break label$8
      }
      label$9 : {
       label$10 : {
        $6 = HEAP32[($2 + 8 | 0) >> 2] | 0;
        $7 = $3 + ($6 << 2 | 0) | 0;
        if (($1 | 0) == (HEAP32[($7 + 20 | 0) >> 2] | 0 | 0)) {
         break label$10
        }
        $8 = HEAP32[($7 + 4 | 0) >> 2] | 0;
        break label$9;
       }
       HEAP32[($2 + 12 | 0) >> 2] = 0;
       $6 = $6 + 1 | 0;
       HEAP32[($2 + 8 | 0) >> 2] = $6;
       $8 = HEAP32[(($3 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       $1 = $8;
       label$11 : while (1) {
        $5 = $1;
        $1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
        if ($1) {
         continue label$11
        }
        break label$11;
       };
       $1 = $7 + 36 | 0;
       $4 = HEAP32[$1 >> 2] | 0;
       HEAP32[$1 >> 2] = HEAP32[($5 + 36 | 0) >> 2] | 0;
      }
      if (HEAP32[($8 + 40 | 0) >> 2] | 0) {
       break label$7
      }
      label$12 : {
       label$13 : {
        if (($6 | 0) < (1 | 0)) {
         break label$13
        }
        label$14 : {
         $1 = $6 + -1 | 0;
         if (!(HEAP32[((HEAP32[(($3 + ($1 << 2 | 0) | 0) + 4 | 0) >> 2] | 0) + 40 | 0) >> 2] | 0)) {
          break label$14
         }
         trans234_subtree_right($3 | 0, $1 | 0, $2 + 8 | 0 | 0, $2 + 12 | 0 | 0);
         break label$7;
        }
        if (($6 | 0) > (2 | 0)) {
         break label$12
        }
       }
       $5 = $6 + 1 | 0;
       $1 = HEAP32[(($3 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if (!$1) {
        break label$12
       }
       if (!(HEAP32[($1 + 40 | 0) >> 2] | 0)) {
        break label$12
       }
       trans234_subtree_left($3 | 0, $5 | 0, $2 + 8 | 0 | 0, $2 + 12 | 0 | 0);
       break label$7;
      }
      trans234_subtree_merge($3 | 0, $6 - (($6 | 0) > (0 | 0)) | 0 | 0, $2 + 8 | 0 | 0, $2 + 12 | 0 | 0);
      $8 = HEAP32[(($3 + ((HEAP32[($2 + 8 | 0) >> 2] | 0) << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
      if (HEAP32[($3 + 36 | 0) >> 2] | 0) {
       break label$7
      }
      HEAP32[$8 >> 2] = 0;
      HEAP32[$0 >> 2] = $8;
      break label$6;
     }
     $5 = HEAP32[($2 + 8 | 0) >> 2] | 0;
     label$15 : {
      if ($4) {
       break label$15
      }
      $4 = HEAP32[(($3 + ($5 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
     }
     label$16 : {
      label$17 : {
       if (($5 | 0) > (1 | 0)) {
        break label$17
       }
       $1 = (($5 << 2 | 0) + $3 | 0) + 36 | 0;
       label$18 : while (1) {
        $6 = $1 + 4 | 0;
        $8 = HEAP32[$6 >> 2] | 0;
        if (!$8) {
         break label$17
        }
        HEAP32[$1 >> 2] = $8;
        $8 = 2;
        $1 = $6;
        $5 = $5 + 1 | 0;
        if (($5 | 0) != (2 | 0)) {
         continue label$18
        }
        break label$16;
       };
      }
      $8 = $5;
     }
     HEAP32[(($3 + 36 | 0) + ($8 << 2 | 0) | 0) >> 2] = 0;
     label$19 : {
      if (HEAP32[($3 + 36 | 0) >> 2] | 0) {
       break label$19
      }
      HEAP32[$0 >> 2] = 0;
     }
     __stack_pointer = $2 + 16 | 0;
     return $4 | 0;
    }
    $1 = ($3 + ((HEAP32[($2 + 8 | 0) >> 2] | 0) << 2 | 0) | 0) + 20 | 0;
    HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + -1 | 0;
   }
   $1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
   $3 = $8;
   continue label$1;
  };
 }
 
 function trans234_subtree_right($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $6 = 0, $7 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $9 = 0, $8 = 0, $5 = 0, $27 = 0, $10 = 0, $50 = 0, $105 = 0;
  $4 = $0 + 4 | 0;
  $5 = $1 + 1 | 0;
  $6 = HEAP32[($4 + ($5 << 2 | 0) | 0) >> 2] | 0;
  $7 = HEAP32[($6 + 28 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($6 + 20 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($6 + 24 | 0) >> 2] | 0;
  $27 = i64toi32_i32$0;
  i64toi32_i32$0 = $6 + 24 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $27;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  $8 = $1 << 2 | 0;
  $4 = HEAP32[($4 + $8 | 0) >> 2] | 0;
  $9 = $6 + 40 | 0;
  $10 = HEAP32[$9 >> 2] | 0;
  HEAP32[$9 >> 2] = HEAP32[($6 + 36 | 0) >> 2] | 0;
  $9 = $6 + 8 | 0;
  i64toi32_i32$1 = HEAP32[$9 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($9 + 4 | 0) >> 2] | 0;
  HEAP32[$9 >> 2] = HEAP32[($6 + 4 | 0) >> 2] | 0;
  $50 = i64toi32_i32$1;
  i64toi32_i32$1 = $6 + 12 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $50;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($6 + 44 | 0) >> 2] = $10;
  HEAP32[($6 + 32 | 0) >> 2] = $7;
  $7 = 2;
  label$1 : {
   if (HEAP32[($4 + 44 | 0) >> 2] | 0) {
    break label$1
   }
   $7 = (HEAP32[($4 + 40 | 0) >> 2] | 0 | 0) != (0 | 0);
  }
  $8 = ($0 + $8 | 0) + 36 | 0;
  HEAP32[($6 + 36 | 0) >> 2] = HEAP32[$8 >> 2] | 0;
  $4 = ($7 << 2 | 0) + $4 | 0;
  $7 = $4 + 36 | 0;
  HEAP32[$8 >> 2] = HEAP32[$7 >> 2] | 0;
  HEAP32[$7 >> 2] = 0;
  $7 = $4 + 8 | 0;
  HEAP32[($6 + 4 | 0) >> 2] = HEAP32[$7 >> 2] | 0;
  $4 = $4 + 24 | 0;
  HEAP32[($6 + 20 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
  HEAP32[$7 >> 2] = 0;
  HEAP32[$4 >> 2] = 0;
  label$2 : {
   $4 = HEAP32[($6 + 4 | 0) >> 2] | 0;
   if (!$4) {
    break label$2
   }
   HEAP32[$4 >> 2] = $6;
  }
  $0 = $0 + 20 | 0;
  $4 = $0 + ($1 << 2 | 0) | 0;
  $105 = $4;
  $6 = (HEAP32[($6 + 20 | 0) >> 2] | 0) + 1 | 0;
  $4 = (HEAP32[$4 >> 2] | 0) - $6 | 0;
  HEAP32[$105 >> 2] = $4;
  $0 = $0 + ($5 << 2 | 0) | 0;
  HEAP32[$0 >> 2] = (HEAP32[$0 >> 2] | 0) + $6 | 0;
  label$3 : {
   if (!$2) {
    break label$3
   }
   label$4 : {
    label$5 : {
     $0 = HEAP32[$2 >> 2] | 0;
     if (($0 | 0) != ($1 | 0)) {
      break label$5
     }
     $1 = HEAP32[$3 >> 2] | 0;
     if (($1 | 0) <= ($4 | 0)) {
      break label$5
     }
     HEAP32[$3 >> 2] = $1 + ($4 ^ -1 | 0) | 0;
     $6 = 1;
     $3 = $2;
     break label$4;
    }
    if (($0 | 0) != ($5 | 0)) {
     break label$3
    }
   }
   HEAP32[$3 >> 2] = (HEAP32[$3 >> 2] | 0) + $6 | 0;
  }
 }
 
 function trans234_subtree_left($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $5 = 0, $6 = 0, $8 = 0, i64toi32_i32$2 = 0, $4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7 = 0, $51 = 0, $62 = 0, $66 = 0, $77 = 0, $93 = 0, $95 = 0;
  $4 = $0 + 4 | 0;
  $5 = HEAP32[($4 + ($1 << 2 | 0) | 0) >> 2] | 0;
  $6 = 2;
  label$1 : {
   $7 = $1 + -1 | 0;
   $8 = $7 << 2 | 0;
   $4 = HEAP32[($4 + $8 | 0) >> 2] | 0;
   if (HEAP32[($4 + 40 | 0) >> 2] | 0) {
    break label$1
   }
   $6 = (HEAP32[($4 + 36 | 0) >> 2] | 0 | 0) != (0 | 0);
  }
  $6 = ($6 << 2 | 0) + $4 | 0;
  $8 = ($0 + $8 | 0) + 36 | 0;
  HEAP32[($6 + 36 | 0) >> 2] = HEAP32[$8 >> 2] | 0;
  HEAP32[$8 >> 2] = HEAP32[($5 + 36 | 0) >> 2] | 0;
  $8 = $6 + 24 | 0;
  HEAP32[$8 >> 2] = HEAP32[($5 + 20 | 0) >> 2] | 0;
  $51 = $6 + 8 | 0;
  $6 = HEAP32[($5 + 4 | 0) >> 2] | 0;
  HEAP32[$51 >> 2] = $6;
  label$2 : {
   if (!$6) {
    break label$2
   }
   HEAP32[$6 >> 2] = $4;
  }
  i64toi32_i32$2 = $5 + 8 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $62 = i64toi32_i32$0;
  i64toi32_i32$0 = $5;
  HEAP32[($5 + 4 | 0) >> 2] = $62;
  HEAP32[($5 + 8 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $5 + 24 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $66 = i64toi32_i32$1;
  i64toi32_i32$1 = $5;
  HEAP32[($5 + 20 | 0) >> 2] = $66;
  HEAP32[($5 + 24 | 0) >> 2] = i64toi32_i32$0;
  $6 = $5 + 32 | 0;
  HEAP32[($5 + 28 | 0) >> 2] = HEAP32[$6 >> 2] | 0;
  HEAP32[$6 >> 2] = 0;
  i64toi32_i32$2 = $5 + 40 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $77 = i64toi32_i32$0;
  i64toi32_i32$0 = $5;
  HEAP32[($5 + 36 | 0) >> 2] = $77;
  HEAP32[($5 + 40 | 0) >> 2] = i64toi32_i32$1;
  $6 = $5 + 16 | 0;
  HEAP32[($5 + 12 | 0) >> 2] = HEAP32[$6 >> 2] | 0;
  HEAP32[($5 + 44 | 0) >> 2] = 0;
  HEAP32[$6 >> 2] = 0;
  $0 = $0 + 20 | 0;
  $5 = $0 + ($1 << 2 | 0) | 0;
  $93 = $5;
  $95 = HEAP32[$5 >> 2] | 0;
  $5 = (HEAP32[$8 >> 2] | 0) + 1 | 0;
  HEAP32[$93 >> 2] = $95 - $5 | 0;
  $0 = $0 + ($7 << 2 | 0) | 0;
  HEAP32[$0 >> 2] = (HEAP32[$0 >> 2] | 0) + $5 | 0;
  label$3 : {
   if (!$2) {
    break label$3
   }
   if ((HEAP32[$2 >> 2] | 0 | 0) != ($1 | 0)) {
    break label$3
   }
   $5 = (HEAP32[$3 >> 2] | 0) - $5 | 0;
   HEAP32[$3 >> 2] = $5;
   if (($5 | 0) > (-1 | 0)) {
    break label$3
   }
   HEAP32[$3 >> 2] = ($5 + (HEAP32[$0 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[$2 >> 2] = (HEAP32[$2 >> 2] | 0) + -1 | 0;
  }
 }
 
 function trans234_subtree_merge($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $5 = 0, $10 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0, $4 = 0, $7 = 0, $9 = 0, $13 = 0, $16 = 0, $14 = 0, $15 = 0, $17 = 0;
  $4 = 2;
  $5 = $0 + 20 | 0;
  $6 = $0 + 4 | 0;
  $7 = $1 + 1 | 0;
  $8 = $7 << 2 | 0;
  $9 = HEAP32[($6 + $8 | 0) >> 2] | 0;
  $10 = 2;
  label$1 : {
   $11 = $1 << 2 | 0;
   $12 = HEAP32[($6 + $11 | 0) >> 2] | 0;
   if (HEAP32[($12 + 40 | 0) >> 2] | 0) {
    break label$1
   }
   $10 = (HEAP32[($12 + 36 | 0) >> 2] | 0 | 0) != (0 | 0);
  }
  $13 = $5 + $11 | 0;
  $5 = $5 + $8 | 0;
  label$2 : {
   if (HEAP32[($9 + 40 | 0) >> 2] | 0) {
    break label$2
   }
   $4 = (HEAP32[($9 + 36 | 0) >> 2] | 0 | 0) != (0 | 0);
  }
  $14 = HEAP32[$13 >> 2] | 0;
  $15 = HEAP32[$5 >> 2] | 0;
  $16 = $12 + ($10 << 2 | 0) | 0;
  HEAP32[($16 + 36 | 0) >> 2] = HEAP32[(($0 + ($1 << 2 | 0) | 0) + 36 | 0) >> 2] | 0;
  $17 = ($4 << 2 | 0) + 4 | 0;
  $5 = 0;
  $10 = 0;
  label$3 : while (1) {
   $8 = $16 + $5 | 0;
   $11 = $9 + $5 | 0;
   $6 = HEAP32[($11 + 4 | 0) >> 2] | 0;
   HEAP32[($8 + 8 | 0) >> 2] = $6;
   HEAP32[($8 + 24 | 0) >> 2] = HEAP32[($11 + 20 | 0) >> 2] | 0;
   label$4 : {
    if (!$6) {
     break label$4
    }
    HEAP32[$6 >> 2] = $12;
   }
   label$5 : {
    if ($10 >>> 0 >= $4 >>> 0) {
     break label$5
    }
    HEAP32[($8 + 40 | 0) >> 2] = HEAP32[($11 + 36 | 0) >> 2] | 0;
   }
   $10 = $10 + 1 | 0;
   $5 = $5 + 4 | 0;
   if (($17 | 0) != ($5 | 0)) {
    continue label$3
   }
   break label$3;
  };
  HEAP32[$13 >> 2] = ($15 + (HEAP32[$13 >> 2] | 0) | 0) + 1 | 0;
  label$6 : {
   if (($1 | 0) > (1 | 0)) {
    break label$6
   }
   $10 = $1 + -2 | 0;
   $5 = (($1 << 2 | 0) + $0 | 0) + 24 | 0;
   label$7 : while (1) {
    HEAP32[($5 + -16 | 0) >> 2] = HEAP32[($5 + -12 | 0) >> 2] | 0;
    $6 = $5 + 4 | 0;
    HEAP32[$5 >> 2] = HEAP32[$6 >> 2] | 0;
    $5 = $6;
    $10 = $10 + 1 | 0;
    if ($10) {
     continue label$7
    }
    break label$7;
   };
   $10 = $1 + -2 | 0;
   $5 = (($1 << 2 | 0) + $0 | 0) + 36 | 0;
   label$8 : while (1) {
    $6 = $5 + 4 | 0;
    HEAP32[$5 >> 2] = HEAP32[$6 >> 2] | 0;
    $5 = $6;
    $10 = $10 + 1 | 0;
    if ($10) {
     continue label$8
    }
    break label$8;
   };
  }
  HEAP32[($0 + 44 | 0) >> 2] = 0;
  HEAP32[($0 + 32 | 0) >> 2] = 0;
  HEAP32[($0 + 16 | 0) >> 2] = 0;
  label$9 : {
   if (!$2) {
    break label$9
   }
   label$10 : {
    $5 = HEAP32[$2 >> 2] | 0;
    if (($5 | 0) != ($7 | 0)) {
     break label$10
    }
    HEAP32[$2 >> 2] = $1;
    HEAP32[$3 >> 2] = ($14 + (HEAP32[$3 >> 2] | 0) | 0) + 1 | 0;
    return;
   }
   if (($5 | 0) <= ($7 | 0)) {
    break label$9
   }
   HEAP32[$2 >> 2] = $5 + -1 | 0;
  }
 }
 
 function join234($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $5 = 0, $6 = 0, $4 = 0, $3 = 0, $2 = 0, $7 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  label$1 : {
   $3 = HEAP32[$1 >> 2] | 0;
   if (!$3) {
    break label$1
   }
   $4 = $3 + 20 | 0;
   $5 = 0;
   $6 = 0;
   label$2 : while (1) {
    $6 = (HEAP32[($4 + $5 | 0) >> 2] | 0) + $6 | 0;
    $5 = $5 + 4 | 0;
    if (($5 | 0) != (16 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $4 = $3 + 36 | 0;
   $5 = 0;
   label$3 : while (1) {
    $6 = $6 + ((HEAP32[($4 + $5 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $5 = $5 + 4 | 0;
    if (($5 | 0) != (12 | 0)) {
     continue label$3
    }
    break label$3;
   };
   if (($6 | 0) < (1 | 0)) {
    break label$1
   }
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       if (!(HEAP32[($0 + 4 | 0) >> 2] | 0)) {
        break label$7
       }
       if (findrelpos234($0 | 0, index234($1 | 0, 0 | 0) | 0 | 0, 0 | 0, 4 | 0, 0 | 0) | 0) {
        break label$6
       }
      }
      $6 = 0;
      $7 = delpos234($1 | 0, 0 | 0) | 0;
      label$8 : {
       $4 = HEAP32[$0 >> 2] | 0;
       if (!$4) {
        break label$8
       }
       $6 = 0;
       $5 = $4;
       label$9 : while (1) {
        $6 = $6 + 1 | 0;
        $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
        if ($5) {
         continue label$9
        }
        break label$9;
       };
      }
      $3 = HEAP32[$1 >> 2] | 0;
      if (!$3) {
       break label$5
      }
      $5 = $3;
      label$10 : while (1) {
       $6 = $6 + -1 | 0;
       $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
       if ($5) {
        continue label$10
       }
       break label$10;
      };
      HEAP32[($2 + 12 | 0) >> 2] = $6;
      $6 = join234_internal($4 | 0, $7 | 0, $3 | 0, $2 + 12 | 0 | 0) | 0;
      break label$4;
     }
     $0 = 0;
     break label$1;
    }
    HEAP32[($2 + 12 | 0) >> 2] = $6;
    $6 = join234_internal($4 | 0, $7 | 0, 0 | 0, $2 + 12 | 0 | 0) | 0;
   }
   HEAP32[$0 >> 2] = $6;
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
  var $5 = 0, $6 = 0, $7 = 0, $9 = 0, $4 = 0, i64toi32_i32$0 = 0, $8 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
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
    $5 = 0;
    label$3 : {
     if (!$0) {
      break label$3
     }
     $8 = $0 + 20 | 0;
     $9 = 0;
     $5 = 0;
     label$4 : while (1) {
      $5 = (HEAP32[($8 + $9 | 0) >> 2] | 0) + $5 | 0;
      $9 = $9 + 4 | 0;
      if (($9 | 0) != (16 | 0)) {
       continue label$4
      }
      break label$4;
     };
     $8 = $0 + 36 | 0;
     $9 = 0;
     label$5 : while (1) {
      $5 = $5 + ((HEAP32[($8 + $9 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
      $9 = $9 + 4 | 0;
      if (($9 | 0) != (12 | 0)) {
       continue label$5
      }
      break label$5;
     };
    }
    HEAP32[($7 + 36 | 0) >> 2] = $1;
    HEAP32[($7 + 20 | 0) >> 2] = $5;
    HEAP32[($7 + 8 | 0) >> 2] = $2;
    label$6 : {
     if (!$2) {
      break label$6
     }
     $9 = $2 + 20 | 0;
     $5 = 0;
     $6 = 0;
     label$7 : while (1) {
      $6 = (HEAP32[($9 + $5 | 0) >> 2] | 0) + $6 | 0;
      $5 = $5 + 4 | 0;
      if (($5 | 0) != (16 | 0)) {
       continue label$7
      }
      break label$7;
     };
     $9 = $2 + 36 | 0;
     $5 = 0;
     label$8 : while (1) {
      $6 = $6 + ((HEAP32[($9 + $5 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
      $5 = $5 + 4 | 0;
      if (($5 | 0) != (12 | 0)) {
       continue label$8
      }
      break label$8;
     };
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
    label$9 : {
     if (!$0) {
      break label$9
     }
     HEAP32[$0 >> 2] = $7;
    }
    label$10 : {
     if (!$2) {
      break label$10
     }
     HEAP32[$2 >> 2] = $7;
    }
    HEAP32[$3 >> 2] = 1;
    break label$1;
   }
   label$11 : {
    label$12 : {
     if (($5 | 0) > (-1 | 0)) {
      break label$12
     }
     HEAP32[($4 + 12 | 0) >> 2] = $2;
     label$13 : while (1) {
      $6 = $2;
      $2 = HEAP32[($6 + 4 | 0) >> 2] | 0;
      $5 = $5 + 1 | 0;
      if ($5) {
       continue label$13
      }
      break label$13;
     };
     $5 = 0;
     break label$11;
    }
    HEAP32[($4 + 12 | 0) >> 2] = $0;
    $9 = (HEAP32[($0 + 44 | 0) >> 2] | 0 | 0) != (0 | 0);
    label$14 : {
     label$15 : {
      if (($5 | 0) >= (2 | 0)) {
       break label$15
      }
      $6 = $0;
      break label$14;
     }
     $5 = $5 + 1 | 0;
     $6 = $0;
     label$16 : while (1) {
      label$17 : {
       label$18 : {
        if (!($9 & 1 | 0)) {
         break label$18
        }
        $6 = $6 + 16 | 0;
        break label$17;
       }
       label$19 : {
        if (!(HEAP32[($6 + 40 | 0) >> 2] | 0)) {
         break label$19
        }
        $6 = $6 + 12 | 0;
        break label$17;
       }
       $6 = $6 + 8 | 0;
      }
      $6 = HEAP32[$6 >> 2] | 0;
      $9 = (HEAP32[($6 + 44 | 0) >> 2] | 0 | 0) != (0 | 0);
      $5 = $5 + -1 | 0;
      if (($5 | 0) > (2 | 0)) {
       continue label$16
      }
      break label$16;
     };
    }
    $5 = 3;
    label$20 : {
     if ($9) {
      break label$20
     }
     $5 = HEAP32[($6 + 40 | 0) >> 2] | 0 ? 2 : 1;
    }
    $0 = HEAP32[(($6 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
   }
   (wasm2js_i32$0 = $3, wasm2js_i32$1 = add234_insert($0 | 0, $1 | 0, $2 | 0, $4 + 12 | 0 | 0, $6 | 0, $5 | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
   $7 = HEAP32[($4 + 12 | 0) >> 2] | 0;
  }
  __stack_pointer = $4 + 16 | 0;
  return $7 | 0;
 }
 
 function join234r($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $6 = 0, $5 = 0, $4 = 0, $3 = 0, $2 = 0, $7 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  label$1 : {
   $3 = HEAP32[$0 >> 2] | 0;
   if (!$3) {
    break label$1
   }
   $4 = $3 + 20 | 0;
   $5 = 0;
   $6 = 0;
   label$2 : while (1) {
    $6 = (HEAP32[($4 + $5 | 0) >> 2] | 0) + $6 | 0;
    $5 = $5 + 4 | 0;
    if (($5 | 0) != (16 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $4 = $3 + 36 | 0;
   $5 = 0;
   label$3 : while (1) {
    $6 = $6 + ((HEAP32[($4 + $5 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $5 = $5 + 4 | 0;
    if (($5 | 0) != (12 | 0)) {
     continue label$3
    }
    break label$3;
   };
   if (($6 | 0) < (1 | 0)) {
    break label$1
   }
   $6 = $6 + -1 | 0;
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       if (!(HEAP32[($1 + 4 | 0) >> 2] | 0)) {
        break label$7
       }
       if (findrelpos234($1 | 0, index234($0 | 0, $6 | 0) | 0 | 0, 0 | 0, 2 | 0, 0 | 0) | 0) {
        break label$6
       }
      }
      $7 = delpos234($0 | 0, $6 | 0) | 0;
      label$8 : {
       label$9 : {
        $4 = HEAP32[$0 >> 2] | 0;
        if ($4) {
         break label$9
        }
        $6 = 0;
        break label$8;
       }
       $6 = 0;
       $5 = $4;
       label$10 : while (1) {
        $6 = $6 + 1 | 0;
        $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
        if ($5) {
         continue label$10
        }
        break label$10;
       };
      }
      $3 = HEAP32[$1 >> 2] | 0;
      if (!$3) {
       break label$5
      }
      $5 = $3;
      label$11 : while (1) {
       $6 = $6 + -1 | 0;
       $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
       if ($5) {
        continue label$11
       }
       break label$11;
      };
      HEAP32[($2 + 12 | 0) >> 2] = $6;
      $6 = join234_internal($4 | 0, $7 | 0, $3 | 0, $2 + 12 | 0 | 0) | 0;
      break label$4;
     }
     $1 = 0;
     break label$1;
    }
    HEAP32[($2 + 12 | 0) >> 2] = $6;
    $6 = join234_internal($4 | 0, $7 | 0, 0 | 0, $2 + 12 | 0 | 0) | 0;
   }
   HEAP32[$1 >> 2] = $6;
   HEAP32[$0 >> 2] = 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $1 | 0;
 }
 
 function splitpos234($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $8 = 0, $7 = 0, $6 = 0, $15 = 0, $9 = 0, $10 = 0, $3 = 0, $4 = 0, $17 = 0, $18 = 0, $20 = 0, $21 = 0, $12 = 0, $14 = 0, $11 = 0, $19 = 0, $22 = 0, $23 = 0, $13 = 0, $16 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  $4 = 0;
  $5 = 0;
  label$1 : {
   $6 = HEAP32[$0 >> 2] | 0;
   if (!$6) {
    break label$1
   }
   $7 = $6 + 20 | 0;
   $8 = 0;
   $5 = 0;
   label$2 : while (1) {
    $5 = (HEAP32[($7 + $8 | 0) >> 2] | 0) + $5 | 0;
    $8 = $8 + 4 | 0;
    if (($8 | 0) != (16 | 0)) {
     continue label$2
    }
    break label$2;
   };
   $7 = $6 + 36 | 0;
   $8 = 0;
   label$3 : while (1) {
    $5 = $5 + ((HEAP32[($7 + $8 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
    $8 = $8 + 4 | 0;
    if (($8 | 0) != (12 | 0)) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   if (($1 | 0) < (0 | 0)) {
    break label$4
   }
   if (($5 | 0) < ($1 | 0)) {
    break label$4
   }
   $4 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
   HEAP32[($4 + 4 | 0) >> 2] = HEAP32[($0 + 4 | 0) >> 2] | 0;
   HEAP32[$4 >> 2] = 0;
   HEAP32[(0 + 1104 | 0) >> 2] = $4 + 8 | 0;
   $9 = HEAP32[$0 >> 2] | 0;
   label$5 : {
    label$6 : {
     if ($1) {
      break label$6
     }
     $8 = $9;
     $9 = 0;
     break label$5;
    }
    label$7 : {
     label$8 : {
      if ($9) {
       break label$8
      }
      $5 = 0;
      break label$7;
     }
     $7 = $9 + 20 | 0;
     $8 = 0;
     $5 = 0;
     label$9 : while (1) {
      $5 = (HEAP32[($7 + $8 | 0) >> 2] | 0) + $5 | 0;
      $8 = $8 + 4 | 0;
      if (($8 | 0) != (16 | 0)) {
       continue label$9
      }
      break label$9;
     };
     $7 = $9 + 36 | 0;
     $8 = 0;
     label$10 : while (1) {
      $5 = $5 + ((HEAP32[($7 + $8 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
      $8 = $8 + 4 | 0;
      if (($8 | 0) != (12 | 0)) {
       continue label$10
      }
      break label$10;
     };
    }
    label$11 : {
     if (($5 | 0) != ($1 | 0)) {
      break label$11
     }
     $8 = 0;
     HEAP32[$0 >> 2] = 0;
     break label$5;
    }
    HEAP32[($3 + 8 | 0) >> 2] = 0;
    HEAP32[($3 + 12 | 0) >> 2] = 0;
    $6 = -1;
    $10 = 0;
    $7 = 0;
    label$12 : while (1) {
     $11 = $7;
     $12 = $10;
     $13 = $6;
     $7 = $9;
     $14 = $1;
     $5 = 20;
     $8 = 0;
     label$13 : while (1) {
      $8 = (HEAP32[($7 + $5 | 0) >> 2] | 0) + $8 | 0;
      $5 = $5 + 4 | 0;
      if (($5 | 0) != (36 | 0)) {
       continue label$13
      }
      break label$13;
     };
     $5 = 36;
     label$14 : while (1) {
      $8 = $8 + ((HEAP32[($7 + $5 | 0) >> 2] | 0 | 0) != (0 | 0)) | 0;
      $5 = $5 + 4 | 0;
      if (($5 | 0) != (48 | 0)) {
       continue label$14
      }
      break label$14;
     };
     $5 = 0;
     $6 = 0;
     $1 = $14;
     label$15 : {
      $15 = HEAP32[($7 + 20 | 0) >> 2] | 0;
      if (($1 | 0) <= ($15 | 0)) {
       break label$15
      }
      $6 = 1;
      $1 = $14 + ($15 ^ -1 | 0) | 0;
      $15 = HEAP32[($7 + 24 | 0) >> 2] | 0;
      if (($1 | 0) <= ($15 | 0)) {
       break label$15
      }
      $6 = 2;
      $1 = $1 + ($15 ^ -1 | 0) | 0;
      $15 = HEAP32[($7 + 28 | 0) >> 2] | 0;
      if (($1 | 0) <= ($15 | 0)) {
       break label$15
      }
      $1 = $1 + ($15 ^ -1 | 0) | 0;
      $6 = 3;
     }
     $16 = $8 - $14 | 0;
     $10 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
     HEAP32[(0 + 1104 | 0) >> 2] = $10 + 48 | 0;
     $15 = $10 + 20 | 0;
     $17 = $10 + 4 | 0;
     $18 = $10 + 36 | 0;
     $19 = ($7 + ($6 << 2 | 0) | 0) + 4 | 0;
     $9 = HEAP32[$19 >> 2] | 0;
     label$16 : while (1) {
      label$17 : {
       label$18 : {
        $8 = $5 + $6 | 0;
        if ($8 >>> 0 > 2 >>> 0) {
         break label$18
        }
        $20 = ($7 + ($8 << 2 | 0) | 0) + 36 | 0;
        $21 = HEAP32[$20 >> 2] | 0;
        if (!$21) {
         break label$18
        }
        HEAP32[($18 + ($5 << 2 | 0) | 0) >> 2] = $21;
        $5 = $5 + 1 | 0;
        $21 = $5 << 2 | 0;
        $22 = $7 + (($8 + 1 | 0) << 2 | 0) | 0;
        $23 = $22 + 4 | 0;
        $8 = HEAP32[$23 >> 2] | 0;
        HEAP32[($17 + $21 | 0) >> 2] = $8;
        label$19 : {
         if (!$8) {
          break label$19
         }
         HEAP32[$8 >> 2] = $10;
        }
        HEAP32[$20 >> 2] = 0;
        HEAP32[$23 >> 2] = 0;
        $8 = $22 + 20 | 0;
        HEAP32[($15 + $21 | 0) >> 2] = HEAP32[$8 >> 2] | 0;
        break label$17;
       }
       HEAP32[($18 + ($5 << 2 | 0) | 0) >> 2] = 0;
       $5 = $5 + 1 | 0;
       $8 = $5 << 2 | 0;
       HEAP32[($17 + $8 | 0) >> 2] = 0;
       $8 = $15 + $8 | 0;
      }
      HEAP32[$8 >> 2] = 0;
      if (($5 | 0) != (3 | 0)) {
       continue label$16
      }
      break label$16;
     };
     label$20 : {
      label$21 : {
       if (!$11) {
        break label$21
       }
       $5 = $11 + ($13 << 2 | 0) | 0;
       HEAP32[($5 + 4 | 0) >> 2] = $7;
       HEAP32[($5 + 20 | 0) >> 2] = $14;
       HEAP32[$7 >> 2] = $11;
       HEAP32[($12 + 20 | 0) >> 2] = $16;
       HEAP32[($12 + 4 | 0) >> 2] = $10;
       break label$20;
      }
      $12 = 0;
      HEAP32[$7 >> 2] = 0;
      HEAP32[($3 + 8 | 0) >> 2] = $7;
      HEAP32[($3 + 12 | 0) >> 2] = $10;
     }
     HEAP32[$10 >> 2] = $12;
     if ($9) {
      continue label$12
     }
     break label$12;
    };
    HEAP32[$17 >> 2] = 0;
    HEAP32[$15 >> 2] = 0;
    HEAP32[$19 >> 2] = 0;
    HEAP32[(($7 + ($6 << 2 | 0) | 0) + 20 | 0) >> 2] = 0;
    $5 = 0;
    label$22 : while (1) {
     $18 = $5;
     label$23 : {
      $6 = ($3 + 8 | 0) + ($5 << 2 | 0) | 0;
      $5 = HEAP32[$6 >> 2] | 0;
      if (!$5) {
       break label$23
      }
      label$24 : {
       label$25 : while (1) {
        if (HEAP32[($5 + 36 | 0) >> 2] | 0) {
         break label$24
        }
        $5 = HEAP32[($5 + 4 | 0) >> 2] | 0;
        HEAP32[$6 >> 2] = $5;
        HEAP32[$5 >> 2] = 0;
        continue label$25;
       };
      }
      label$26 : while (1) {
       $7 = 1;
       label$27 : {
        label$28 : {
         if (!($18 & 1 | 0)) {
          break label$28
         }
         $17 = 4;
         $8 = 0;
         $15 = 0;
         break label$27;
        }
        $8 = 3;
        label$29 : {
         if (HEAP32[($5 + 16 | 0) >> 2] | 0) {
          break label$29
         }
         $8 = HEAP32[($5 + 12 | 0) >> 2] | 0 ? 2 : 1;
        }
        $17 = 5;
        $7 = $8 + -1 | 0;
        $15 = $7;
       }
       $8 = HEAP32[(($5 + ($8 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
       if (!$8) {
        break label$23
       }
       label$30 : {
        label$31 : {
         label$32 : {
          if (HEAP32[($8 + 40 | 0) >> 2] | 0) {
           break label$32
          }
          label$33 : {
           label$34 : {
            label$35 : {
             $20 = HEAP32[(($5 + ($7 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
             if (!(HEAP32[($20 + 40 | 0) >> 2] | 0)) {
              break label$35
             }
             if (HEAP32[($8 + 36 | 0) >> 2] | 0) {
              break label$33
             }
             if (HEAP32[($20 + 44 | 0) >> 2] | 0) {
              break label$34
             }
            }
            trans234_subtree_merge($5 | 0, $15 | 0, 0 | 0, 0 | 0);
            $8 = HEAP32[(($5 + ($15 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
            if (HEAP32[($5 + 36 | 0) >> 2] | 0) {
             break label$31
            }
            HEAP32[$8 >> 2] = 0;
            HEAP32[$6 >> 2] = $8;
            break label$31;
           }
           FUNCTION_TABLE[$17 | 0]($5, $7, 0, 0);
          }
          FUNCTION_TABLE[$17 | 0]($5, $7, 0, 0);
         }
         $5 = $8;
         break label$30;
        }
        $5 = $8;
       }
       if ($5) {
        continue label$26
       }
       break label$26;
      };
     }
     $5 = 1;
     if (!($18 & 1 | 0)) {
      continue label$22
     }
     break label$22;
    };
    $8 = HEAP32[($3 + 12 | 0) >> 2] | 0;
    HEAP32[$0 >> 2] = $8;
    $9 = HEAP32[($3 + 8 | 0) >> 2] | 0;
   }
   $5 = $4;
   label$36 : {
    if ($2) {
     break label$36
    }
    HEAP32[$4 >> 2] = $8;
    $5 = $0;
   }
   HEAP32[$5 >> 2] = $9;
  }
  __stack_pointer = $3 + 16 | 0;
  return $4 | 0;
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
  var $4 = 0, $3 = 0, $5 = 0, $6 = 0;
  $3 = HEAP32[(0 + 1104 | 0) >> 2] | 0;
  HEAP32[(0 + 1104 | 0) >> 2] = $3 + 48 | 0;
  $4 = 36;
  label$1 : while (1) {
   $5 = HEAP32[($0 + $4 | 0) >> 2] | 0;
   label$2 : {
    if (!$1) {
     break label$2
    }
    if (!$5) {
     break label$2
    }
    $5 = FUNCTION_TABLE[$1 | 0]($2, $5) | 0;
   }
   HEAP32[($3 + $4 | 0) >> 2] = $5;
   $4 = $4 + 4 | 0;
   if (($4 | 0) != (48 | 0)) {
    continue label$1
   }
   break label$1;
  };
  $4 = 4;
  label$3 : while (1) {
   label$4 : {
    label$5 : {
     $5 = $0 + $4 | 0;
     $6 = HEAP32[$5 >> 2] | 0;
     if (!$6) {
      break label$5
     }
     $6 = copynode234($6 | 0, $1 | 0, $2 | 0) | 0;
     HEAP32[($3 + $4 | 0) >> 2] = $6;
     HEAP32[$6 >> 2] = $3;
     break label$4;
    }
    HEAP32[($3 + $4 | 0) >> 2] = 0;
   }
   HEAP32[(($3 + $4 | 0) + 16 | 0) >> 2] = HEAP32[($5 + 16 | 0) >> 2] | 0;
   $4 = $4 + 4 | 0;
   if (($4 | 0) != (20 | 0)) {
    continue label$3
   }
   break label$3;
  };
  return $3 | 0;
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
 var FUNCTION_TABLE = Table([null, xyd_cmp_nc, net_neighbour, xyd_cmp, trans234_subtree_left, trans234_subtree_right]);
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
