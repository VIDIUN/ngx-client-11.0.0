/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams } from './KalturaAssetParams';
/**
 * @record
 */
export function KalturaAssetParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetParamsId;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetParamsVersion;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetVersion;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.format;
var KalturaAssetParamsOutput = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetParamsOutput, _super);
    function KalturaAssetParamsOutput(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetParamsOutput.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetParamsOutput' },
            assetParamsId: { type: 'n' },
            assetParamsVersion: { type: 's' },
            assetId: { type: 's' },
            assetVersion: { type: 's' },
            readyBehavior: { type: 'n' },
            format: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' }
        });
        return result;
    };
    return KalturaAssetParamsOutput;
}(KalturaAssetParams));
export { KalturaAssetParamsOutput };
if (false) {
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetParamsId;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetParamsVersion;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetId;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetVersion;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.readyBehavior;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.format;
}
typesMappingStorage['KalturaAssetParamsOutput'] = KalturaAssetParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlsRixJQUFBO0lBQThDLG9EQUFrQjtJQVM1RCxrQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBN0NMO0VBZThDLGtCQUFrQixFQStCL0QsQ0FBQTtBQS9CRCxvQ0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRhaW5lckZvcm1hdCB9IGZyb20gJy4vS2FsdHVyYUNvbnRhaW5lckZvcm1hdCc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRQYXJhbXMsIEthbHR1cmFBc3NldFBhcmFtc0FyZ3MgfSBmcm9tICcuL0thbHR1cmFBc3NldFBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0QXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNBcmdzIHtcbiAgICBhc3NldFBhcmFtc0lkPyA6IG51bWJlcjtcblx0YXNzZXRQYXJhbXNWZXJzaW9uPyA6IHN0cmluZztcblx0YXNzZXRJZD8gOiBzdHJpbmc7XG5cdGFzc2V0VmVyc2lvbj8gOiBzdHJpbmc7XG5cdHJlYWR5QmVoYXZpb3I/IDogbnVtYmVyO1xuXHRmb3JtYXQ/IDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0IGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zIHtcblxuICAgIGFzc2V0UGFyYW1zSWQgOiBudW1iZXI7XG5cdGFzc2V0UGFyYW1zVmVyc2lvbiA6IHN0cmluZztcblx0YXNzZXRJZCA6IHN0cmluZztcblx0YXNzZXRWZXJzaW9uIDogc3RyaW5nO1xuXHRyZWFkeUJlaGF2aW9yIDogbnVtYmVyO1xuXHRmb3JtYXQgOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0JyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zVmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0VmVyc2lvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWFkeUJlaGF2aW9yIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZvcm1hdCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250YWluZXJGb3JtYXQsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRhaW5lckZvcm1hdCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0J10gPSBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXQ7Il19