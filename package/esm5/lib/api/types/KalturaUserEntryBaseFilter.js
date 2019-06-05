/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaUserEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.entryIdNotIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.userIdNotIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.extendedStatusEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.extendedStatusIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.extendedStatusNotIn;
var KalturaUserEntryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserEntryBaseFilter, _super);
    function KalturaUserEntryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserEntryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserEntryBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            entryIdNotIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            userIdNotIn: { type: 's' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaUserEntryStatus, subType: 'KalturaUserEntryStatus' },
            createdAtLessThanOrEqual: { type: 'd' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaUserEntryType, subType: 'KalturaUserEntryType' },
            extendedStatusEqual: { type: 'es', subTypeConstructor: KalturaUserEntryExtendedStatus, subType: 'KalturaUserEntryExtendedStatus' },
            extendedStatusIn: { type: 's' },
            extendedStatusNotIn: { type: 's' }
        });
        return result;
    };
    return KalturaUserEntryBaseFilter;
}(KalturaRelatedFilter));
export { KalturaUserEntryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.entryIdNotIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.userIdNotIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.extendedStatusEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.extendedStatusIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.extendedStatusNotIn;
}
typesMappingStorage['KalturaUserEntryBaseFilter'] = KalturaUserEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QnhGLElBQUE7SUFBZ0Qsc0RBQW9CO0lBcUJoRSxvQ0FBWSxJQUFzQztlQUU5QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN4RyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ3RJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FuRkw7RUE2QmdELG9CQUFvQixFQXVEbkUsQ0FBQTtBQXZERCxzQ0F1REM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckVudHJ5VHlwZSB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0aWROb3RJbj8gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRJbj8gOiBzdHJpbmc7XG5cdGVudHJ5SWROb3RJbj8gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsPyA6IHN0cmluZztcblx0dXNlcklkSW4/IDogc3RyaW5nO1xuXHR1c2VySWROb3RJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFVc2VyRW50cnlTdGF0dXM7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR0eXBlRXF1YWw/IDogS2FsdHVyYVVzZXJFbnRyeVR5cGU7XG5cdGV4dGVuZGVkU3RhdHVzRXF1YWw/IDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzO1xuXHRleHRlbmRlZFN0YXR1c0luPyA6IHN0cmluZztcblx0ZXh0ZW5kZWRTdGF0dXNOb3RJbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0aWROb3RJbiA6IHN0cmluZztcblx0ZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeUlkSW4gOiBzdHJpbmc7XG5cdGVudHJ5SWROb3RJbiA6IHN0cmluZztcblx0dXNlcklkRXF1YWwgOiBzdHJpbmc7XG5cdHVzZXJJZEluIDogc3RyaW5nO1xuXHR1c2VySWROb3RJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhVXNlckVudHJ5U3RhdHVzO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhVXNlckVudHJ5VHlwZTtcblx0ZXh0ZW5kZWRTdGF0dXNFcXVhbCA6IEthbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cztcblx0ZXh0ZW5kZWRTdGF0dXNJbiA6IHN0cmluZztcblx0ZXh0ZW5kZWRTdGF0dXNOb3RJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVXNlckVudHJ5U3RhdHVzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJFbnRyeVR5cGUnIH0sXG5cdFx0XHRcdGV4dGVuZGVkU3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzJyB9LFxuXHRcdFx0XHRleHRlbmRlZFN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV4dGVuZGVkU3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyOyJdfQ==