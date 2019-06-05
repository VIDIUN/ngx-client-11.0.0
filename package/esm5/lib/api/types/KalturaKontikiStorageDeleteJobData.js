/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStorageDeleteJobData } from './KalturaStorageDeleteJobData';
/**
 * @record
 */
export function KalturaKontikiStorageDeleteJobDataArgs() { }
/** @type {?|undefined} */
KalturaKontikiStorageDeleteJobDataArgs.prototype.contentMoid;
/** @type {?|undefined} */
KalturaKontikiStorageDeleteJobDataArgs.prototype.serviceToken;
var KalturaKontikiStorageDeleteJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaKontikiStorageDeleteJobData, _super);
    function KalturaKontikiStorageDeleteJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaKontikiStorageDeleteJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaKontikiStorageDeleteJobData' },
            contentMoid: { type: 's' },
            serviceToken: { type: 's' }
        });
        return result;
    };
    return KalturaKontikiStorageDeleteJobData;
}(KalturaStorageDeleteJobData));
export { KalturaKontikiStorageDeleteJobData };
if (false) {
    /** @type {?} */
    KalturaKontikiStorageDeleteJobData.prototype.contentMoid;
    /** @type {?} */
    KalturaKontikiStorageDeleteJobData.prototype.serviceToken;
}
typesMappingStorage['KalturaKontikiStorageDeleteJobData'] = KalturaKontikiStorageDeleteJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7OztBQVE3RyxJQUFBO0lBQXdELDhEQUEyQjtJQUsvRSw0Q0FBWSxJQUE4QztlQUV0RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQWhDTDtFQVV3RCwyQkFBMkIsRUF1QmxGLENBQUE7QUF2QkQsOENBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RvcmFnZURlbGV0ZUpvYkRhdGEsIEthbHR1cmFTdG9yYWdlRGVsZXRlSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdG9yYWdlRGVsZXRlSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVN0b3JhZ2VEZWxldGVKb2JEYXRhQXJncyB7XG4gICAgY29udGVudE1vaWQ/IDogc3RyaW5nO1xuXHRzZXJ2aWNlVG9rZW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhS29udGlraVN0b3JhZ2VEZWxldGVKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYVN0b3JhZ2VEZWxldGVKb2JEYXRhIHtcblxuICAgIGNvbnRlbnRNb2lkIDogc3RyaW5nO1xuXHRzZXJ2aWNlVG9rZW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFLb250aWtpU3RvcmFnZURlbGV0ZUpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUtvbnRpa2lTdG9yYWdlRGVsZXRlSm9iRGF0YScgfSxcblx0XHRcdFx0Y29udGVudE1vaWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmljZVRva2VuIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFLb250aWtpU3RvcmFnZURlbGV0ZUpvYkRhdGEnXSA9IEthbHR1cmFLb250aWtpU3RvcmFnZURlbGV0ZUpvYkRhdGE7Il19