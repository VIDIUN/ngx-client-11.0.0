/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDrmProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.providerEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.providerIn;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDrmProfileBaseFilterArgs.prototype.statusIn;
var KalturaDrmProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDrmProfileBaseFilter, _super);
    function KalturaDrmProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDrmProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDrmProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameLike: { type: 's' },
            providerEqual: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' },
            providerIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDrmProfileStatus, subType: 'KalturaDrmProfileStatus' },
            statusIn: { type: 's' }
        });
        return result;
    };
    return KalturaDrmProfileBaseFilter;
}(KalturaFilter));
export { KalturaDrmProfileBaseFilter };
if (false) {
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.providerEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.providerIn;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDrmProfileBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaDrmProfileBaseFilter'] = KalturaDrmProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURybVByb2ZpbGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJtUHJvZmlsZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbkUsSUFBQTtJQUFpRCx1REFBYTtJQVkxRCxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNoSCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ2hILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0F2REw7RUFtQmlELGFBQWEsRUFxQzdELENBQUE7QUFyQ0QsdUNBcUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURybVByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm9maWxlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJtUHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRuYW1lTGlrZT8gOiBzdHJpbmc7XG5cdHByb3ZpZGVyRXF1YWw/IDogS2FsdHVyYURybVByb3ZpZGVyVHlwZTtcblx0cHJvdmlkZXJJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFEcm1Qcm9maWxlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm1Qcm9maWxlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRuYW1lTGlrZSA6IHN0cmluZztcblx0cHJvdmlkZXJFcXVhbCA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGU7XG5cdHByb3ZpZGVySW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYURybVByb2ZpbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJtUHJvZmlsZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURybVByb2ZpbGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdmlkZXJFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURybVByb3ZpZGVyVHlwZScgfSxcblx0XHRcdFx0cHJvdmlkZXJJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm1Qcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1Qcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJtUHJvZmlsZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFEcm1Qcm9maWxlQmFzZUZpbHRlcjsiXX0=