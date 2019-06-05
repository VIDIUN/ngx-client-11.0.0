/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchMetadataOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchMetadataOrderByItemArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchMetadataOrderByItemArgs.prototype.metadataProfileId;
var KalturaESearchMetadataOrderByItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchMetadataOrderByItem, _super);
    function KalturaESearchMetadataOrderByItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchMetadataOrderByItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchMetadataOrderByItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    };
    return KalturaESearchMetadataOrderByItem;
}(KalturaESearchOrderByItem));
export { KalturaESearchMetadataOrderByItem };
if (false) {
    /** @type {?} */
    KalturaESearchMetadataOrderByItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchMetadataOrderByItem.prototype.metadataProfileId;
}
typesMappingStorage['KalturaESearchMetadataOrderByItem'] = KalturaESearchMetadataOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hNZXRhZGF0YU9yZGVyQnlJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaE1ldGFkYXRhT3JkZXJCeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7QUFRdkcsSUFBQTtJQUF1RCw2REFBeUI7SUFLNUUsMkNBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQWhDTDtFQVV1RCx5QkFBeUIsRUF1Qi9FLENBQUE7QUF2QkQsNkNBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtLCBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hNZXRhZGF0YU9yZGVyQnlJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB7XG4gICAgeHBhdGg/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoTWV0YWRhdGFPcmRlckJ5SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0ge1xuXG4gICAgeHBhdGggOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaE1ldGFkYXRhT3JkZXJCeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hNZXRhZGF0YU9yZGVyQnlJdGVtJyB9LFxuXHRcdFx0XHR4cGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaE1ldGFkYXRhT3JkZXJCeUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoTWV0YWRhdGFPcmRlckJ5SXRlbTsiXX0=