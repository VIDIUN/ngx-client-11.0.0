/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemData } from './KalturaESearchItemData';
/**
 * @record
 */
export function KalturaESearchMetadataItemDataArgs() { }
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.metadataFieldId;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.valueText;
/** @type {?|undefined} */
KalturaESearchMetadataItemDataArgs.prototype.valueInt;
var KalturaESearchMetadataItemData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchMetadataItemData, _super);
    function KalturaESearchMetadataItemData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchMetadataItemData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchMetadataItemData' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' },
            valueText: { type: 's' },
            valueInt: { type: 'n' }
        });
        return result;
    };
    return KalturaESearchMetadataItemData;
}(KalturaESearchItemData));
export { KalturaESearchMetadataItemData };
if (false) {
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.xpath;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.metadataFieldId;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.valueText;
    /** @type {?} */
    KalturaESearchMetadataItemData.prototype.valueInt;
}
typesMappingStorage['KalturaESearchMetadataItemData'] = KalturaESearchMetadataItemData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaE1ldGFkYXRhSXRlbURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXOUYsSUFBQTtJQUFvRCwwREFBc0I7SUFRdEUsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQXpDTDtFQWFvRCxzQkFBc0IsRUE2QnpFLENBQUE7QUE3QkQsMENBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhLCBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhQXJncyB7XG4gICAgeHBhdGg/IDogc3RyaW5nO1xuXHRtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhRmllbGRJZD8gOiBudW1iZXI7XG5cdHZhbHVlVGV4dD8gOiBzdHJpbmc7XG5cdHZhbHVlSW50PyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSB7XG5cbiAgICB4cGF0aCA6IHN0cmluZztcblx0bWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG1ldGFkYXRhRmllbGRJZCA6IG51bWJlcjtcblx0dmFsdWVUZXh0IDogc3RyaW5nO1xuXHR2YWx1ZUludCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hNZXRhZGF0YUl0ZW1EYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoTWV0YWRhdGFJdGVtRGF0YScgfSxcblx0XHRcdFx0eHBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFGaWVsZElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZhbHVlVGV4dCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YWx1ZUludCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaE1ldGFkYXRhSXRlbURhdGEnXSA9IEthbHR1cmFFU2VhcmNoTWV0YWRhdGFJdGVtRGF0YTsiXX0=