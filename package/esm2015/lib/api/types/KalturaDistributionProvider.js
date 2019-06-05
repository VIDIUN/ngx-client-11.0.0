/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaDistributionProvider extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsRixNQUFNLGtDQUFtQyxTQUFRLGlCQUFpQjs7OztJQVk5RCxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQzFJLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUMsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgbmFtZT8gOiBzdHJpbmc7XG5cdHNjaGVkdWxlVXBkYXRlRW5hYmxlZD8gOiBib29sZWFuO1xuXHRhdmFpbGFiaWxpdHlVcGRhdGVFbmFibGVkPyA6IGJvb2xlYW47XG5cdGRlbGV0ZUluc3RlYWRVcGRhdGU/IDogYm9vbGVhbjtcblx0aW50ZXJ2YWxCZWZvcmVTdW5yaXNlPyA6IG51bWJlcjtcblx0aW50ZXJ2YWxCZWZvcmVTdW5zZXQ/IDogbnVtYmVyO1xuXHR1cGRhdGVSZXF1aXJlZEVudHJ5RmllbGRzPyA6IHN0cmluZztcblx0dXBkYXRlUmVxdWlyZWRNZXRhZGF0YVhQYXRocz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IHR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzY2hlZHVsZVVwZGF0ZUVuYWJsZWQgOiBib29sZWFuO1xuXHRhdmFpbGFiaWxpdHlVcGRhdGVFbmFibGVkIDogYm9vbGVhbjtcblx0ZGVsZXRlSW5zdGVhZFVwZGF0ZSA6IGJvb2xlYW47XG5cdGludGVydmFsQmVmb3JlU3VucmlzZSA6IG51bWJlcjtcblx0aW50ZXJ2YWxCZWZvcmVTdW5zZXQgOiBudW1iZXI7XG5cdHVwZGF0ZVJlcXVpcmVkRW50cnlGaWVsZHMgOiBzdHJpbmc7XG5cdHVwZGF0ZVJlcXVpcmVkTWV0YWRhdGFYUGF0aHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXInIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY2hlZHVsZVVwZGF0ZUVuYWJsZWQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YXZhaWxhYmlsaXR5VXBkYXRlRW5hYmxlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkZWxldGVJbnN0ZWFkVXBkYXRlIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGludGVydmFsQmVmb3JlU3VucmlzZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpbnRlcnZhbEJlZm9yZVN1bnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cGRhdGVSZXF1aXJlZEVudHJ5RmllbGRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZVJlcXVpcmVkTWV0YWRhdGFYUGF0aHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyJ10gPSBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXI7Il19