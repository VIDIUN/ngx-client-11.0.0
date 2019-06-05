/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaCategoryUserBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCategoryUserBaseFilter, _super);
    function KalturaCategoryUserBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCategoryUserBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaCategoryUserBaseFilter;
}(KalturaRelatedFilter));
export { KalturaCategoryUserBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCeEYsSUFBQTtJQUFtRCx5REFBb0I7SUFzQm5FLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQy9JLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNwSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ3RILGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXRGTDtFQThCbUQsb0JBQW9CLEVBeUR0RSxDQUFBO0FBekRELHlDQXlEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZSB9IGZyb20gJy4vS2FsdHVyYVVwZGF0ZU1ldGhvZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGNhdGVnb3J5SWRFcXVhbD8gOiBudW1iZXI7XG5cdGNhdGVnb3J5SWRJbj8gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsPyA6IHN0cmluZztcblx0dXNlcklkSW4/IDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTGV2ZWxFcXVhbD8gOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsO1xuXHRwZXJtaXNzaW9uTGV2ZWxJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZU1ldGhvZEVxdWFsPyA6IEthbHR1cmFVcGRhdGVNZXRob2RUeXBlO1xuXHR1cGRhdGVNZXRob2RJbj8gOiBzdHJpbmc7XG5cdGNhdGVnb3J5RnVsbElkc1N0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRjYXRlZ29yeUZ1bGxJZHNFcXVhbD8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc01hdGNoQW5kPyA6IHN0cmluZztcblx0cGVybWlzc2lvbk5hbWVzTWF0Y2hPcj8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc05vdENvbnRhaW5zPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBjYXRlZ29yeUlkRXF1YWwgOiBudW1iZXI7XG5cdGNhdGVnb3J5SWRJbiA6IHN0cmluZztcblx0dXNlcklkRXF1YWwgOiBzdHJpbmc7XG5cdHVzZXJJZEluIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTGV2ZWxFcXVhbCA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWw7XG5cdHBlcm1pc3Npb25MZXZlbEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDYXRlZ29yeVVzZXJTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVNZXRob2RFcXVhbCA6IEthbHR1cmFVcGRhdGVNZXRob2RUeXBlO1xuXHR1cGRhdGVNZXRob2RJbiA6IHN0cmluZztcblx0Y2F0ZWdvcnlGdWxsSWRzU3RhcnRzV2l0aCA6IHN0cmluZztcblx0Y2F0ZWdvcnlGdWxsSWRzRXF1YWwgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25OYW1lc01hdGNoQW5kIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNNYXRjaE9yIDogc3RyaW5nO1xuXHRwZXJtaXNzaW9uTmFtZXNOb3RDb250YWlucyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNhdGVnb3J5VXNlckJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbkxldmVsRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWwnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25MZXZlbEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5VXNlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlTWV0aG9kRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhVXBkYXRlTWV0aG9kVHlwZScgfSxcblx0XHRcdFx0dXBkYXRlTWV0aG9kSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlGdWxsSWRzU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUZ1bGxJZHNFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZXNNYXRjaEFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZXNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlcm1pc3Npb25OYW1lc05vdENvbnRhaW5zIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeVVzZXJCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQ2F0ZWdvcnlVc2VyQmFzZUZpbHRlcjsiXX0=