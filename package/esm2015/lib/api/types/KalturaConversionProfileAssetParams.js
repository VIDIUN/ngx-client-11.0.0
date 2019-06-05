/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorReadyBehaviorType } from './KalturaFlavorReadyBehaviorType';
import { KalturaAssetParamsOrigin } from './KalturaAssetParamsOrigin';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetParamsDeletePolicy } from './KalturaAssetParamsDeletePolicy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaConversionProfileAssetParamsArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.origin;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.forceNoneComplied;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.deletePolicy;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.isEncrypted;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.contentAwareness;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.chunkedEncodeMode;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.twoPass;
/** @type {?|undefined} */
KalturaConversionProfileAssetParamsArgs.prototype.tags;
export class KalturaConversionProfileAssetParams extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConversionProfileAssetParams' },
            conversionProfileId: { type: 'n', readOnly: true },
            assetParamsId: { type: 'n', readOnly: true },
            readyBehavior: { type: 'en', subTypeConstructor: KalturaFlavorReadyBehaviorType, subType: 'KalturaFlavorReadyBehaviorType' },
            origin: { type: 'en', subTypeConstructor: KalturaAssetParamsOrigin, subType: 'KalturaAssetParamsOrigin' },
            systemName: { type: 's' },
            forceNoneComplied: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            deletePolicy: { type: 'en', subTypeConstructor: KalturaAssetParamsDeletePolicy, subType: 'KalturaAssetParamsDeletePolicy' },
            isEncrypted: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            contentAwareness: { type: 'n' },
            chunkedEncodeMode: { type: 'n' },
            twoPass: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            tags: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.conversionProfileId;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.assetParamsId;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.readyBehavior;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.origin;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.systemName;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.forceNoneComplied;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.deletePolicy;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.isEncrypted;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.contentAwareness;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.chunkedEncodeMode;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.twoPass;
    /** @type {?} */
    KalturaConversionProfileAssetParams.prototype.tags;
}
typesMappingStorage['KalturaConversionProfileAssetParams'] = KalturaConversionProfileAssetParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsRixNQUFNLDBDQUEyQyxTQUFRLGlCQUFpQjs7OztJQWV0RSxZQUFZLElBQStDO1FBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNyRCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDL0MsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDaEksTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0csVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3BILFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQy9ILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDMUcsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGUgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW4gfSBmcm9tICcuL0thbHR1cmFBc3NldFBhcmFtc09yaWdpbic7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc0RlbGV0ZVBvbGljeSB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zRGVsZXRlUG9saWN5JztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICByZWFkeUJlaGF2aW9yPyA6IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZTtcblx0b3JpZ2luPyA6IEthbHR1cmFBc3NldFBhcmFtc09yaWdpbjtcblx0c3lzdGVtTmFtZT8gOiBzdHJpbmc7XG5cdGZvcmNlTm9uZUNvbXBsaWVkPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGRlbGV0ZVBvbGljeT8gOiBLYWx0dXJhQXNzZXRQYXJhbXNEZWxldGVQb2xpY3k7XG5cdGlzRW5jcnlwdGVkPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGNvbnRlbnRBd2FyZW5lc3M/IDogbnVtYmVyO1xuXHRjaHVua2VkRW5jb2RlTW9kZT8gOiBudW1iZXI7XG5cdHR3b1Bhc3M/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dGFncz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgY29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgYXNzZXRQYXJhbXNJZCA6IG51bWJlcjtcblx0cmVhZHlCZWhhdmlvciA6IEthbHR1cmFGbGF2b3JSZWFkeUJlaGF2aW9yVHlwZTtcblx0b3JpZ2luIDogS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHRmb3JjZU5vbmVDb21wbGllZCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGRlbGV0ZVBvbGljeSA6IEthbHR1cmFBc3NldFBhcmFtc0RlbGV0ZVBvbGljeTtcblx0aXNFbmNyeXB0ZWQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjb250ZW50QXdhcmVuZXNzIDogbnVtYmVyO1xuXHRjaHVua2VkRW5jb2RlTW9kZSA6IG51bWJlcjtcblx0dHdvUGFzcyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHRhZ3MgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlYWR5QmVoYXZpb3IgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yUmVhZHlCZWhhdmlvclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclJlYWR5QmVoYXZpb3JUeXBlJyB9LFxuXHRcdFx0XHRvcmlnaW4gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRQYXJhbXNPcmlnaW4sIHN1YlR5cGUgOiAnS2FsdHVyYUFzc2V0UGFyYW1zT3JpZ2luJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZvcmNlTm9uZUNvbXBsaWVkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRkZWxldGVQb2xpY3kgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXNzZXRQYXJhbXNEZWxldGVQb2xpY3ksIHN1YlR5cGUgOiAnS2FsdHVyYUFzc2V0UGFyYW1zRGVsZXRlUG9saWN5JyB9LFxuXHRcdFx0XHRpc0VuY3J5cHRlZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0Y29udGVudEF3YXJlbmVzcyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjaHVua2VkRW5jb2RlTW9kZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0d29QYXNzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zJ10gPSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtczsiXX0=