/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
/**
 * @record
 */
export function KalturaWidevineFlavorAssetArgs() { }
/** @type {?|undefined} */
KalturaWidevineFlavorAssetArgs.prototype.widevineDistributionStartDate;
/** @type {?|undefined} */
KalturaWidevineFlavorAssetArgs.prototype.widevineDistributionEndDate;
/** @type {?|undefined} */
KalturaWidevineFlavorAssetArgs.prototype.widevineAssetId;
export class KalturaWidevineFlavorAsset extends KalturaFlavorAsset {
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
            objectType: { type: 'c', default: 'KalturaWidevineFlavorAsset' },
            widevineDistributionStartDate: { type: 'n' },
            widevineDistributionEndDate: { type: 'n' },
            widevineAssetId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaWidevineFlavorAsset.prototype.widevineDistributionStartDate;
    /** @type {?} */
    KalturaWidevineFlavorAsset.prototype.widevineDistributionEndDate;
    /** @type {?} */
    KalturaWidevineFlavorAsset.prototype.widevineAssetId;
}
typesMappingStorage['KalturaWidevineFlavorAsset'] = KalturaWidevineFlavorAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGV2aW5lRmxhdm9yQXNzZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXaWRldmluZUZsYXZvckFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7OztBQVNsRixNQUFNLGlDQUFrQyxTQUFRLGtCQUFrQjs7OztJQU05RCxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldCwgS2FsdHVyYUZsYXZvckFzc2V0QXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvckFzc2V0QXJncyB7XG4gICAgd2lkZXZpbmVEaXN0cmlidXRpb25TdGFydERhdGU/IDogbnVtYmVyO1xuXHR3aWRldmluZURpc3RyaWJ1dGlvbkVuZERhdGU/IDogbnVtYmVyO1xuXHR3aWRldmluZUFzc2V0SWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldCBleHRlbmRzIEthbHR1cmFGbGF2b3JBc3NldCB7XG5cbiAgICB3aWRldmluZURpc3RyaWJ1dGlvblN0YXJ0RGF0ZSA6IG51bWJlcjtcblx0d2lkZXZpbmVEaXN0cmlidXRpb25FbmREYXRlIDogbnVtYmVyO1xuXHR3aWRldmluZUFzc2V0SWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFXaWRldmluZUZsYXZvckFzc2V0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFXaWRldmluZUZsYXZvckFzc2V0JyB9LFxuXHRcdFx0XHR3aWRldmluZURpc3RyaWJ1dGlvblN0YXJ0RGF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3aWRldmluZURpc3RyaWJ1dGlvbkVuZERhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2lkZXZpbmVBc3NldElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXaWRldmluZUZsYXZvckFzc2V0J10gPSBLYWx0dXJhV2lkZXZpbmVGbGF2b3JBc3NldDsiXX0=