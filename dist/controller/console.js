"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),require("./alias");const Router_1=require("./Tools/Console/Router"),index_1=__importDefault(require("./Console/index")),chalk_1=require("chalk");module.exports=function(){var e=Router_1.params.map(e=>"> "+e).slice(1);console.log((0,chalk_1.yellow)("#",Router_1.params[0],...e)),index_1.default.execute()};