/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaDoubleClickDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.channelLink;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.channelDescription;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.cuePointsProvider;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.itemsPerPage;
/** @type {?|undefined} */
KalturaDoubleClickDistributionProfileArgs.prototype.ignoreSchedulingInFeed;
var KalturaDoubleClickDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDoubleClickDistributionProfile, _super);
    function KalturaDoubleClickDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDoubleClickDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDoubleClickDistributionProfile' },
            channelTitle: { type: 's' },
            channelLink: { type: 's' },
            channelDescription: { type: 's' },
            feedUrl: { type: 's', readOnly: true },
            cuePointsProvider: { type: 's' },
            itemsPerPage: { type: 's' },
            ignoreSchedulingInFeed: { type: 'b' }
        });
        return result;
    };
    return KalturaDoubleClickDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaDoubleClickDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.channelLink;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.channelDescription;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.cuePointsProvider;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.itemsPerPage;
    /** @type {?} */
    KalturaDoubleClickDistributionProfile.prototype.ignoreSchedulingInFeed;
}
typesMappingStorage['KalturaDoubleClickDistributionProfile'] = KalturaDoubleClickDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlJLElBQUE7SUFBMkQsaUVBQXNDO0lBVTdGLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzlCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBOUNMO0VBYzJELHNDQUFzQyxFQWlDaEcsQ0FBQTtBQWpDRCxpREFpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBjaGFubmVsVGl0bGU/IDogc3RyaW5nO1xuXHRjaGFubmVsTGluaz8gOiBzdHJpbmc7XG5cdGNoYW5uZWxEZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdGN1ZVBvaW50c1Byb3ZpZGVyPyA6IHN0cmluZztcblx0aXRlbXNQZXJQYWdlPyA6IHN0cmluZztcblx0aWdub3JlU2NoZWR1bGluZ0luRmVlZD8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgY2hhbm5lbFRpdGxlIDogc3RyaW5nO1xuXHRjaGFubmVsTGluayA6IHN0cmluZztcblx0Y2hhbm5lbERlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBmZWVkVXJsIDogc3RyaW5nO1xuXHRjdWVQb2ludHNQcm92aWRlciA6IHN0cmluZztcblx0aXRlbXNQZXJQYWdlIDogc3RyaW5nO1xuXHRpZ25vcmVTY2hlZHVsaW5nSW5GZWVkIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURvdWJsZUNsaWNrRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlJyB9LFxuXHRcdFx0XHRjaGFubmVsVGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbExpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbERlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjdWVQb2ludHNQcm92aWRlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtc1BlclBhZ2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWdub3JlU2NoZWR1bGluZ0luRmVlZCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhRG91YmxlQ2xpY2tEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==