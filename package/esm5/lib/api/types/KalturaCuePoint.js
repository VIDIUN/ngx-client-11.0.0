/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaCuePoint = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCuePoint, _super);
    function KalturaCuePoint(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCuePoint.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaCuePoint;
}(KalturaObjectBase));
export { KalturaCuePoint };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUN1ZVBvaW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ3VlUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVsRixJQUFBO0lBQXFDLDJDQUFpQjtJQW1CbEQseUJBQVksSUFBMkI7ZUFFbkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUMxSCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3hILE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3hDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzVHLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQXRFTDtFQW9CcUMsaUJBQWlCLEVBbURyRCxDQUFBO0FBbkRELDJCQW1EQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDdWVQb2ludEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0dHJpZ2dlcmVkQXQ/IDogRGF0ZTtcblx0dGFncz8gOiBzdHJpbmc7XG5cdHN0YXJ0VGltZT8gOiBudW1iZXI7XG5cdHBhcnRuZXJEYXRhPyA6IHN0cmluZztcblx0cGFydG5lclNvcnRWYWx1ZT8gOiBudW1iZXI7XG5cdGZvcmNlU3RvcD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHR0aHVtYk9mZnNldD8gOiBudW1iZXI7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ3VlUG9pbnQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IHN0cmluZztcblx0cmVhZG9ubHkgY3VlUG9pbnRUeXBlIDogS2FsdHVyYUN1ZVBvaW50VHlwZTtcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUN1ZVBvaW50U3RhdHVzO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHRyaWdnZXJlZEF0IDogRGF0ZTtcblx0dGFncyA6IHN0cmluZztcblx0c3RhcnRUaW1lIDogbnVtYmVyO1xuXHRyZWFkb25seSB1c2VySWQgOiBzdHJpbmc7XG5cdHBhcnRuZXJEYXRhIDogc3RyaW5nO1xuXHRwYXJ0bmVyU29ydFZhbHVlIDogbnVtYmVyO1xuXHRmb3JjZVN0b3AgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHR0aHVtYk9mZnNldCA6IG51bWJlcjtcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUN1ZVBvaW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDdWVQb2ludCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjdWVQb2ludFR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50VHlwZScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50U3RhdHVzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHRyaWdnZXJlZEF0IDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJEYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9yY2VTdG9wIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHR0aHVtYk9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDdWVQb2ludCddID0gS2FsdHVyYUN1ZVBvaW50OyJdfQ==