/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaVirusScanProfileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.engineTypeEqual;
/** @type {?|undefined} */
KalturaVirusScanProfileBaseFilterArgs.prototype.engineTypeIn;
var KalturaVirusScanProfileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVirusScanProfileBaseFilter, _super);
    function KalturaVirusScanProfileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVirusScanProfileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaVirusScanProfileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameEqual: { type: 's' },
            nameLike: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaVirusScanProfileStatus, subType: 'KalturaVirusScanProfileStatus' },
            statusIn: { type: 's' },
            engineTypeEqual: { type: 'es', subTypeConstructor: KalturaVirusScanEngineType, subType: 'KalturaVirusScanEngineType' },
            engineTypeIn: { type: 's' }
        });
        return result;
    };
    return KalturaVirusScanProfileBaseFilter;
}(KalturaFilter));
export { KalturaVirusScanProfileBaseFilter };
if (false) {
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.engineTypeEqual;
    /** @type {?} */
    KalturaVirusScanProfileBaseFilter.prototype.engineTypeIn;
}
typesMappingStorage['KalturaVirusScanProfileBaseFilter'] = KalturaVirusScanProfileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVmlydXNTY2FuUHJvZmlsZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JuRSxJQUFBO0lBQXVELDZEQUFhO0lBaUJoRSwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUM1SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzFILFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0F0RUw7RUF3QnVELGFBQWEsRUErQ25FLENBQUE7QUEvQ0QsNkNBK0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUgfSBmcm9tICcuL0thbHR1cmFWaXJ1c1NjYW5FbmdpbmVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0bmFtZUVxdWFsPyA6IHN0cmluZztcblx0bmFtZUxpa2U/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRlbmdpbmVUeXBlRXF1YWw/IDogS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGU7XG5cdGVuZ2luZVR5cGVJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRuYW1lRXF1YWwgOiBzdHJpbmc7XG5cdG5hbWVMaWtlIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0ZW5naW5lVHlwZUVxdWFsIDogS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGU7XG5cdGVuZ2luZVR5cGVJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5naW5lVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzU2NhbkVuZ2luZVR5cGUnIH0sXG5cdFx0XHRcdGVuZ2luZVR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVmlydXNTY2FuUHJvZmlsZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlQmFzZUZpbHRlcjsiXX0=