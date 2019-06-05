/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
/**
 * @record
 */
export function KalturaFlavorParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.commandLinesStr;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorParamsVersion;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorAssetVersion;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.readyBehavior;
var KalturaFlavorParamsOutput = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFlavorParamsOutput, _super);
    function KalturaFlavorParamsOutput(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFlavorParamsOutput.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorParamsOutput' },
            flavorParamsId: { type: 'n' },
            commandLinesStr: { type: 's' },
            flavorParamsVersion: { type: 's' },
            flavorAssetId: { type: 's' },
            flavorAssetVersion: { type: 's' },
            readyBehavior: { type: 'n' }
        });
        return result;
    };
    return KalturaFlavorParamsOutput;
}(KalturaFlavorParams));
export { KalturaFlavorParamsOutput };
if (false) {
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorParamsId;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.commandLinesStr;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorParamsVersion;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorAssetId;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorAssetVersion;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.readyBehavior;
}
typesMappingStorage['KalturaFlavorParamsOutput'] = KalturaFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQTJCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXJGLElBQUE7SUFBK0MscURBQW1CO0lBUzlELG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBNUNMO0VBYytDLG1CQUFtQixFQStCakUsQ0FBQTtBQS9CRCxxQ0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtcywgS2FsdHVyYUZsYXZvclBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRBcmdzICBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXNBcmdzIHtcbiAgICBmbGF2b3JQYXJhbXNJZD8gOiBudW1iZXI7XG5cdGNvbW1hbmRMaW5lc1N0cj8gOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc1ZlcnNpb24/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRWZXJzaW9uPyA6IHN0cmluZztcblx0cmVhZHlCZWhhdmlvcj8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQgZXh0ZW5kcyBLYWx0dXJhRmxhdm9yUGFyYW1zIHtcblxuICAgIGZsYXZvclBhcmFtc0lkIDogbnVtYmVyO1xuXHRjb21tYW5kTGluZXNTdHIgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc1ZlcnNpb24gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0VmVyc2lvbiA6IHN0cmluZztcblx0cmVhZHlCZWhhdmlvciA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0JyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb21tYW5kTGluZXNTdHIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zVmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0VmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWFkeUJlaGF2aW9yIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQnXSA9IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQ7Il19