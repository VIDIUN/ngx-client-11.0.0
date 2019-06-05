/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaStreamContainer } from './KalturaStreamContainer';
import { KalturaPlayableEntry } from './KalturaPlayableEntry';
/**
 * @record
 */
export function KalturaMediaEntryArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.mediaType;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.conversionQuality;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.sourceType;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.searchProviderType;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.searchProviderId;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.creditUserName;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.creditUrl;
/** @type {?|undefined} */
KalturaMediaEntryArgs.prototype.streams;
var KalturaMediaEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaEntry, _super);
    function KalturaMediaEntry(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.streams === 'undefined')
            _this.streams = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaMediaEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaEntry' },
            mediaType: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            conversionQuality: { type: 's' },
            sourceType: { type: 'es', subTypeConstructor: KalturaSourceType, subType: 'KalturaSourceType' },
            searchProviderType: { type: 'en', subTypeConstructor: KalturaSearchProviderType, subType: 'KalturaSearchProviderType' },
            searchProviderId: { type: 's' },
            creditUserName: { type: 's' },
            creditUrl: { type: 's' },
            mediaDate: { type: 'd', readOnly: true },
            dataUrl: { type: 's', readOnly: true },
            flavorParamsIds: { type: 's', readOnly: true },
            isTrimDisabled: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            streams: { type: 'a', subTypeConstructor: KalturaStreamContainer, subType: 'KalturaStreamContainer' }
        });
        return result;
    };
    return KalturaMediaEntry;
}(KalturaPlayableEntry));
export { KalturaMediaEntry };
if (false) {
    /** @type {?} */
    KalturaMediaEntry.prototype.mediaType;
    /** @type {?} */
    KalturaMediaEntry.prototype.conversionQuality;
    /** @type {?} */
    KalturaMediaEntry.prototype.sourceType;
    /** @type {?} */
    KalturaMediaEntry.prototype.searchProviderType;
    /** @type {?} */
    KalturaMediaEntry.prototype.searchProviderId;
    /** @type {?} */
    KalturaMediaEntry.prototype.creditUserName;
    /** @type {?} */
    KalturaMediaEntry.prototype.creditUrl;
    /** @type {?} */
    KalturaMediaEntry.prototype.mediaDate;
    /** @type {?} */
    KalturaMediaEntry.prototype.dataUrl;
    /** @type {?} */
    KalturaMediaEntry.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaMediaEntry.prototype.isTrimDisabled;
    /** @type {?} */
    KalturaMediaEntry.prototype.streams;
}
typesMappingStorage['KalturaMediaEntry'] = KalturaMediaEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFNZWRpYUVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3hGLElBQUE7SUFBdUMsNkNBQW9CO0lBZXZELDJCQUFZLElBQTZCO1FBQXpDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0tBQzlEOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDaEcsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ25HLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDM0gsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNqRCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ2xJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NEJBaEVMO0VBcUJ1QyxvQkFBb0IsRUE0QzFELENBQUE7QUE1Q0QsNkJBNENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYVR5cGUgfSBmcm9tICcuL0thbHR1cmFNZWRpYVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNvdXJjZVR5cGUgfSBmcm9tICcuL0thbHR1cmFTb3VyY2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hQcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hQcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhU3RyZWFtQ29udGFpbmVyIH0gZnJvbSAnLi9LYWx0dXJhU3RyZWFtQ29udGFpbmVyJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YWJsZUVudHJ5LCBLYWx0dXJhUGxheWFibGVFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbGF5YWJsZUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWVkaWFFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVBsYXlhYmxlRW50cnlBcmdzIHtcbiAgICBtZWRpYVR5cGU/IDogS2FsdHVyYU1lZGlhVHlwZTtcblx0Y29udmVyc2lvblF1YWxpdHk/IDogc3RyaW5nO1xuXHRzb3VyY2VUeXBlPyA6IEthbHR1cmFTb3VyY2VUeXBlO1xuXHRzZWFyY2hQcm92aWRlclR5cGU/IDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZTtcblx0c2VhcmNoUHJvdmlkZXJJZD8gOiBzdHJpbmc7XG5cdGNyZWRpdFVzZXJOYW1lPyA6IHN0cmluZztcblx0Y3JlZGl0VXJsPyA6IHN0cmluZztcblx0c3RyZWFtcz8gOiBLYWx0dXJhU3RyZWFtQ29udGFpbmVyW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZWRpYUVudHJ5IGV4dGVuZHMgS2FsdHVyYVBsYXlhYmxlRW50cnkge1xuXG4gICAgbWVkaWFUeXBlIDogS2FsdHVyYU1lZGlhVHlwZTtcblx0Y29udmVyc2lvblF1YWxpdHkgOiBzdHJpbmc7XG5cdHNvdXJjZVR5cGUgOiBLYWx0dXJhU291cmNlVHlwZTtcblx0c2VhcmNoUHJvdmlkZXJUeXBlIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZTtcblx0c2VhcmNoUHJvdmlkZXJJZCA6IHN0cmluZztcblx0Y3JlZGl0VXNlck5hbWUgOiBzdHJpbmc7XG5cdGNyZWRpdFVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgbWVkaWFEYXRlIDogRGF0ZTtcblx0cmVhZG9ubHkgZGF0YVVybCA6IHN0cmluZztcblx0cmVhZG9ubHkgZmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXHRyZWFkb25seSBpc1RyaW1EaXNhYmxlZCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHN0cmVhbXMgOiBLYWx0dXJhU3RyZWFtQ29udGFpbmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZWRpYUVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3RyZWFtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3RyZWFtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHRtZWRpYVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYVR5cGUnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25RdWFsaXR5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNvdXJjZVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU291cmNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU291cmNlVHlwZScgfSxcblx0XHRcdFx0c2VhcmNoUHJvdmlkZXJUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRzZWFyY2hQcm92aWRlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWRpdFVzZXJOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWRpdFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYURhdGUgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkYXRhVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNUcmltRGlzYWJsZWQgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0c3RyZWFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmVhbUNvbnRhaW5lciwgc3ViVHlwZSA6ICdLYWx0dXJhU3RyZWFtQ29udGFpbmVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWVkaWFFbnRyeSddID0gS2FsdHVyYU1lZGlhRW50cnk7Il19