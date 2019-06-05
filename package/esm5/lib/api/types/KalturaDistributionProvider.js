/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDistributionProviderArgs() { }
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.name;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.scheduleUpdateEnabled;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.availabilityUpdateEnabled;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.deleteInsteadUpdate;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.intervalBeforeSunrise;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.intervalBeforeSunset;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.updateRequiredEntryFields;
/** @type {?|undefined} */
KalturaDistributionProviderArgs.prototype.updateRequiredMetadataXPaths;
var KalturaDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionProvider, _super);
    function KalturaDistributionProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionProvider' },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaDistributionProviderType, subType: 'KalturaDistributionProviderType' },
            name: { type: 's' },
            scheduleUpdateEnabled: { type: 'b' },
            availabilityUpdateEnabled: { type: 'b' },
            deleteInsteadUpdate: { type: 'b' },
            intervalBeforeSunrise: { type: 'n' },
            intervalBeforeSunset: { type: 'n' },
            updateRequiredEntryFields: { type: 's' },
            updateRequiredMetadataXPaths: { type: 's' }
        });
        return result;
    };
    return KalturaDistributionProvider;
}(KalturaObjectBase));
export { KalturaDistributionProvider };
if (false) {
    /** @type {?} */
    KalturaDistributionProvider.prototype.type;
    /** @type {?} */
    KalturaDistributionProvider.prototype.name;
    /** @type {?} */
    KalturaDistributionProvider.prototype.scheduleUpdateEnabled;
    /** @type {?} */
    KalturaDistributionProvider.prototype.availabilityUpdateEnabled;
    /** @type {?} */
    KalturaDistributionProvider.prototype.deleteInsteadUpdate;
    /** @type {?} */
    KalturaDistributionProvider.prototype.intervalBeforeSunrise;
    /** @type {?} */
    KalturaDistributionProvider.prototype.intervalBeforeSunset;
    /** @type {?} */
    KalturaDistributionProvider.prototype.updateRequiredEntryFields;
    /** @type {?} */
    KalturaDistributionProvider.prototype.updateRequiredMetadataXPaths;
}
typesMappingStorage['KalturaDistributionProvider'] = KalturaDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjbEYsSUFBQTtJQUFpRCx1REFBaUI7SUFZOUQscUNBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzFJLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBckRMO0VBaUJpRCxpQkFBaUIsRUFxQ2pFLENBQUE7QUFyQ0QsdUNBcUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBuYW1lPyA6IHN0cmluZztcblx0c2NoZWR1bGVVcGRhdGVFbmFibGVkPyA6IGJvb2xlYW47XG5cdGF2YWlsYWJpbGl0eVVwZGF0ZUVuYWJsZWQ/IDogYm9vbGVhbjtcblx0ZGVsZXRlSW5zdGVhZFVwZGF0ZT8gOiBib29sZWFuO1xuXHRpbnRlcnZhbEJlZm9yZVN1bnJpc2U/IDogbnVtYmVyO1xuXHRpbnRlcnZhbEJlZm9yZVN1bnNldD8gOiBudW1iZXI7XG5cdHVwZGF0ZVJlcXVpcmVkRW50cnlGaWVsZHM/IDogc3RyaW5nO1xuXHR1cGRhdGVSZXF1aXJlZE1ldGFkYXRhWFBhdGhzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgdHlwZSA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGU7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHNjaGVkdWxlVXBkYXRlRW5hYmxlZCA6IGJvb2xlYW47XG5cdGF2YWlsYWJpbGl0eVVwZGF0ZUVuYWJsZWQgOiBib29sZWFuO1xuXHRkZWxldGVJbnN0ZWFkVXBkYXRlIDogYm9vbGVhbjtcblx0aW50ZXJ2YWxCZWZvcmVTdW5yaXNlIDogbnVtYmVyO1xuXHRpbnRlcnZhbEJlZm9yZVN1bnNldCA6IG51bWJlcjtcblx0dXBkYXRlUmVxdWlyZWRFbnRyeUZpZWxkcyA6IHN0cmluZztcblx0dXBkYXRlUmVxdWlyZWRNZXRhZGF0YVhQYXRocyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlcicgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNjaGVkdWxlVXBkYXRlRW5hYmxlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhdmFpbGFiaWxpdHlVcGRhdGVFbmFibGVkIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGRlbGV0ZUluc3RlYWRVcGRhdGUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0aW50ZXJ2YWxCZWZvcmVTdW5yaXNlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGludGVydmFsQmVmb3JlU3Vuc2V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZVJlcXVpcmVkRW50cnlGaWVsZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBkYXRlUmVxdWlyZWRNZXRhZGF0YVhQYXRocyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXInXSA9IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlcjsiXX0=