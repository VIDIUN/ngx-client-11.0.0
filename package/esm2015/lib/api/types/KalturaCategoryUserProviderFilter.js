/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaCategoryUserProviderFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updateMethodEqual;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.updateMethodIn;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.permissionNamesMatchAnd;
/** @type {?|undefined} */
KalturaCategoryUserProviderFilterArgs.prototype.permissionNamesMatchOr;
export class KalturaCategoryUserProviderFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaCategoryUserProviderFilter' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCategoryUserStatus, subType: 'KalturaCategoryUserStatus' },
            statusIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'n' },
            updatedAtGreaterThanOrEqual: { type: 'n' },
            updatedAtLessThanOrEqual: { type: 'n' },
            updateMethodEqual: { type: 'en', subTypeConstructor: KalturaUpdateMethodType, subType: 'KalturaUpdateMethodType' },
            updateMethodIn: { type: 's' },
            permissionNamesMatchAnd: { type: 's' },
            permissionNamesMatchOr: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updateMethodEqual;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.updateMethodIn;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.permissionNamesMatchAnd;
    /** @type {?} */
    KalturaCategoryUserProviderFilter.prototype.permissionNamesMatchOr;
}
typesMappingStorage['KalturaCategoryUserProviderFilter'] = KalturaCategoryUserProviderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlclByb3ZpZGVyRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlVc2VyUHJvdmlkZXJGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbkUsTUFBTSx3Q0FBeUMsU0FBUSxhQUFhOzs7O0lBZWhFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNwSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ3RILGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZSB9IGZyb20gJy4vS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIHVzZXJJZEVxdWFsPyA6IHN0cmluZztcblx0dXNlcklkSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZU1ldGhvZEVxdWFsPyA6IEthbHR1cmFVcGRhdGVNZXRob2RUeXBlO1xuXHR1cGRhdGVNZXRob2RJbj8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc01hdGNoQW5kPyA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTWF0Y2hPcj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgdXNlcklkRXF1YWwgOiBzdHJpbmc7XG5cdHVzZXJJZEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVwZGF0ZU1ldGhvZEVxdWFsIDogS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGU7XG5cdHVwZGF0ZU1ldGhvZEluIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNYXRjaEFuZCA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTWF0Y2hPciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5VXNlclByb3ZpZGVyRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlcicgfSxcblx0XHRcdFx0dXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cGRhdGVNZXRob2RFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVcGRhdGVNZXRob2RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVcGRhdGVNZXRob2RUeXBlJyB9LFxuXHRcdFx0XHR1cGRhdGVNZXRob2RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZXNNYXRjaEFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZXNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeVVzZXJQcm92aWRlckZpbHRlciddID0gS2FsdHVyYUNhdGVnb3J5VXNlclByb3ZpZGVyRmlsdGVyOyJdfQ==