/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaCategoryUserBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.categoryIdEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.categoryIdIn;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.permissionLevelEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.permissionLevelIn;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.updateMethodEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.updateMethodIn;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.categoryFullIdsStartsWith;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.categoryFullIdsEqual;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.permissionNamesMatchAnd;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.permissionNamesMatchOr;
/** @type {?|undefined} */
KalturaCategoryUserBaseFilterArgs.prototype.permissionNamesNotContains;
export class KalturaCategoryUserBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaCategoryUserBaseFilter' },
            categoryIdEqual: { type: 'n' },
            categoryIdIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            permissionLevelEqual: { type: 'en', subTypeConstructor: KalturaCategoryUserPermissionLevel, subType: 'KalturaCategoryUserPermissionLevel' },
            permissionLevelIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCategoryUserStatus, subType: 'KalturaCategoryUserStatus' },
            statusIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            updateMethodEqual: { type: 'en', subTypeConstructor: KalturaUpdateMethodType, subType: 'KalturaUpdateMethodType' },
            updateMethodIn: { type: 's' },
            categoryFullIdsStartsWith: { type: 's' },
            categoryFullIdsEqual: { type: 's' },
            permissionNamesMatchAnd: { type: 's' },
            permissionNamesMatchOr: { type: 's' },
            permissionNamesNotContains: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.categoryIdEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.categoryIdIn;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.permissionLevelEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.permissionLevelIn;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.updateMethodEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.updateMethodIn;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.categoryFullIdsStartsWith;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.categoryFullIdsEqual;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.permissionNamesMatchAnd;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.permissionNamesMatchOr;
    /** @type {?} */
    KalturaCategoryUserBaseFilter.prototype.permissionNamesNotContains;
}
typesMappingStorage['KalturaCategoryUserBaseFilter'] = KalturaCategoryUserBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJ4RixNQUFNLG9DQUFxQyxTQUFRLG9CQUFvQjs7OztJQXNCbkUsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQy9JLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNwSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ3RILGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUgfSBmcm9tICcuL0thbHR1cmFVcGRhdGVNZXRob2RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlVc2VyQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBjYXRlZ29yeUlkRXF1YWw/IDogbnVtYmVyO1xuXHRjYXRlZ29yeUlkSW4/IDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVzZXJJZEluPyA6IHN0cmluZztcblx0cGVybWlzc2lvbkxldmVsRXF1YWw/IDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbDtcblx0cGVybWlzc2lvbkxldmVsSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVNZXRob2RFcXVhbD8gOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZTtcblx0dXBkYXRlTWV0aG9kSW4/IDogc3RyaW5nO1xuXHRjYXRlZ29yeUZ1bGxJZHNTdGFydHNXaXRoPyA6IHN0cmluZztcblx0Y2F0ZWdvcnlGdWxsSWRzRXF1YWw/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNYXRjaEFuZD8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc01hdGNoT3I/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNOb3RDb250YWlucz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgY2F0ZWdvcnlJZEVxdWFsIDogbnVtYmVyO1xuXHRjYXRlZ29yeUlkSW4gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHR1c2VySWRJbiA6IHN0cmluZztcblx0cGVybWlzc2lvbkxldmVsRXF1YWwgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsO1xuXHRwZXJtaXNzaW9uTGV2ZWxJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlTWV0aG9kRXF1YWwgOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZTtcblx0dXBkYXRlTWV0aG9kSW4gOiBzdHJpbmc7XG5cdGNhdGVnb3J5RnVsbElkc1N0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdGNhdGVnb3J5RnVsbElkc0VxdWFsIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNYXRjaEFuZCA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTWF0Y2hPciA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTm90Q29udGFpbnMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25MZXZlbEVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCwgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTGV2ZWxJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZU1ldGhvZEVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUnIH0sXG5cdFx0XHRcdHVwZGF0ZU1ldGhvZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3J5RnVsbElkc1N0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlGdWxsSWRzRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWVzTWF0Y2hBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbk5hbWVzTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZXNOb3RDb250YWlucyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlVc2VyQmFzZUZpbHRlciddID0gS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXI7Il19