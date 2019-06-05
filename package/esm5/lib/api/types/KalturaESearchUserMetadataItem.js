/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractUserItem } from './KalturaESearchAbstractUserItem';
/**
 * @record
 */
export function KalturaESearchUserMetadataItemArgs() { }
/** @type {?|undefined} */
KalturaESearchUserMetadataItemArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchUserMetadataItemArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaESearchUserMetadataItemArgs.prototype.metadataFieldId;
var KalturaESearchUserMetadataItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchUserMetadataItem, _super);
    function KalturaESearchUserMetadataItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchUserMetadataItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUserMetadataItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' }
        });
        return result;
    };
    return KalturaESearchUserMetadataItem;
}(KalturaESearchAbstractUserItem));
export { KalturaESearchUserMetadataItem };
if (false) {
    /** @type {?} */
    KalturaESearchUserMetadataItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchUserMetadataItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchUserMetadataItem.prototype.metadataFieldId;
}
typesMappingStorage['KalturaESearchUserMetadataItem'] = KalturaESearchUserMetadataItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyTWV0YWRhdGFJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7OztBQVN0SCxJQUFBO0lBQW9ELDBEQUE4QjtJQU05RSx3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0FuQ0w7RUFXb0QsOEJBQThCLEVBeUJqRixDQUFBO0FBekJELDBDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hVc2VyTWV0YWRhdGFJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW1BcmdzIHtcbiAgICB4cGF0aD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hVc2VyTWV0YWRhdGFJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtIHtcblxuICAgIHhwYXRoIDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0bWV0YWRhdGFGaWVsZElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVc2VyTWV0YWRhdGFJdGVtJyB9LFxuXHRcdFx0XHR4cGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXRhZGF0YUZpZWxkSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hVc2VyTWV0YWRhdGFJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW07Il19