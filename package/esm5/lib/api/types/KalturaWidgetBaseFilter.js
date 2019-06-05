/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaWidgetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.sourceWidgetIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.rootWidgetIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.uiConfIdEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaWidgetBaseFilterArgs.prototype.partnerDataLike;
var KalturaWidgetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWidgetBaseFilter, _super);
    function KalturaWidgetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWidgetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWidgetBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            sourceWidgetIdEqual: { type: 's' },
            rootWidgetIdEqual: { type: 's' },
            partnerIdEqual: { type: 'n' },
            entryIdEqual: { type: 's' },
            uiConfIdEqual: { type: 'n' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            partnerDataLike: { type: 's' }
        });
        return result;
    };
    return KalturaWidgetBaseFilter;
}(KalturaFilter));
export { KalturaWidgetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.sourceWidgetIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.rootWidgetIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.uiConfIdEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaWidgetBaseFilter.prototype.partnerDataLike;
}
typesMappingStorage['KalturaWidgetBaseFilter'] = KalturaWidgetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdpZGdldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFXaWRnZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JuRSxJQUFBO0lBQTZDLG1EQUFhO0lBZXRELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0E5REw7RUFvQjZDLGFBQWEsRUEyQ3pELENBQUE7QUEzQ0QsbUNBMkNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV2lkZ2V0QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogc3RyaW5nO1xuXHRpZEluPyA6IHN0cmluZztcblx0c291cmNlV2lkZ2V0SWRFcXVhbD8gOiBzdHJpbmc7XG5cdHJvb3RXaWRnZXRJZEVxdWFsPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHR1aUNvbmZJZEVxdWFsPyA6IG51bWJlcjtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHBhcnRuZXJEYXRhTGlrZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXaWRnZXRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogc3RyaW5nO1xuXHRpZEluIDogc3RyaW5nO1xuXHRzb3VyY2VXaWRnZXRJZEVxdWFsIDogc3RyaW5nO1xuXHRyb290V2lkZ2V0SWRFcXVhbCA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0dWlDb25mSWRFcXVhbCA6IG51bWJlcjtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0cGFydG5lckRhdGFMaWtlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV2lkZ2V0QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhV2lkZ2V0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNvdXJjZVdpZGdldElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cm9vdFdpZGdldElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVpQ29uZklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHBhcnRuZXJEYXRhTGlrZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhV2lkZ2V0QmFzZUZpbHRlciddID0gS2FsdHVyYVdpZGdldEJhc2VGaWx0ZXI7Il19