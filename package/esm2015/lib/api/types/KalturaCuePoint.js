/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointType } from './KalturaCuePointType';
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCuePointArgs() { }
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.triggeredAt;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.tags;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.partnerData;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.partnerSortValue;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.forceStop;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.thumbOffset;
/** @type {?|undefined} */
KalturaCuePointArgs.prototype.systemName;
export class KalturaCuePoint extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaCuePoint' },
            id: { type: 's', readOnly: true },
            cuePointType: { type: 'es', readOnly: true, subTypeConstructor: KalturaCuePointType, subType: 'KalturaCuePointType' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaCuePointStatus, subType: 'KalturaCuePointStatus' },
            entryId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            triggeredAt: { type: 'd' },
            tags: { type: 's' },
            startTime: { type: 'n' },
            userId: { type: 's', readOnly: true },
            partnerData: { type: 's' },
            partnerSortValue: { type: 'n' },
            forceStop: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            thumbOffset: { type: 'n' },
            systemName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCuePoint.prototype.id;
    /** @type {?} */
    KalturaCuePoint.prototype.cuePointType;
    /** @type {?} */
    KalturaCuePoint.prototype.status;
    /** @type {?} */
    KalturaCuePoint.prototype.entryId;
    /** @type {?} */
    KalturaCuePoint.prototype.partnerId;
    /** @type {?} */
    KalturaCuePoint.prototype.createdAt;
    /** @type {?} */
    KalturaCuePoint.prototype.updatedAt;
    /** @type {?} */
    KalturaCuePoint.prototype.triggeredAt;
    /** @type {?} */
    KalturaCuePoint.prototype.tags;
    /** @type {?} */
    KalturaCuePoint.prototype.startTime;
    /** @type {?} */
    KalturaCuePoint.prototype.userId;
    /** @type {?} */
    KalturaCuePoint.prototype.partnerData;
    /** @type {?} */
    KalturaCuePoint.prototype.partnerSortValue;
    /** @type {?} */
    KalturaCuePoint.prototype.forceStop;
    /** @type {?} */
    KalturaCuePoint.prototype.thumbOffset;
    /** @type {?} */
    KalturaCuePoint.prototype.systemName;
}
typesMappingStorage['KalturaCuePoint'] = KalturaCuePoint;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUN1ZVBvaW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ3VlUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZWxGLE1BQU0sc0JBQXVCLFNBQVEsaUJBQWlCOzs7O0lBbUJsRCxZQUFZLElBQTJCO1FBRW5DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUMxSCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3hILE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzVHLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ3VlUG9pbnRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdHRyaWdnZXJlZEF0PyA6IERhdGU7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHRzdGFydFRpbWU/IDogbnVtYmVyO1xuXHRwYXJ0bmVyRGF0YT8gOiBzdHJpbmc7XG5cdHBhcnRuZXJTb3J0VmFsdWU/IDogbnVtYmVyO1xuXHRmb3JjZVN0b3A/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dGh1bWJPZmZzZXQ/IDogbnVtYmVyO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUN1ZVBvaW50IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGN1ZVBvaW50VHlwZSA6IEthbHR1cmFDdWVQb2ludFR5cGU7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFDdWVQb2ludFN0YXR1cztcblx0ZW50cnlJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHR0cmlnZ2VyZWRBdCA6IERhdGU7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHN0YXJ0VGltZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgdXNlcklkIDogc3RyaW5nO1xuXHRwYXJ0bmVyRGF0YSA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZSA6IG51bWJlcjtcblx0Zm9yY2VTdG9wIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0dGh1bWJPZmZzZXQgOiBudW1iZXI7XG5cdHN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDdWVQb2ludEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ3VlUG9pbnQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3VlUG9pbnRUeXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFDdWVQb2ludFR5cGUnIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUN1ZVBvaW50U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDdWVQb2ludFN0YXR1cycgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1cGRhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR0cmlnZ2VyZWRBdCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0VGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVyRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU29ydFZhbHVlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZvcmNlU3RvcCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0dGh1bWJPZmZzZXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3lzdGVtTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ3VlUG9pbnQnXSA9IEthbHR1cmFDdWVQb2ludDsiXX0=