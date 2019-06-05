/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
/**
 * @record
 */
export function KalturaMediaEntryFilterForPlaylistArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryFilterForPlaylistArgs.prototype.limit;
/** @type {?|undefined} */
KalturaMediaEntryFilterForPlaylistArgs.prototype.name;
export class KalturaMediaEntryFilterForPlaylist extends KalturaMediaEntryFilter {
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
            objectType: { type: 'c', default: 'KalturaMediaEntryFilterForPlaylist' },
            limit: { type: 'n' },
            name: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMediaEntryFilterForPlaylist.prototype.limit;
    /** @type {?} */
    KalturaMediaEntryFilterForPlaylist.prototype.name;
}
typesMappingStorage['KalturaMediaEntryFilterForPlaylist'] = KalturaMediaEntryFilterForPlaylist;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7O0FBUWpHLE1BQU0seUNBQTBDLFNBQVEsdUJBQXVCOzs7O0lBSzNFLFlBQVksSUFBOEM7UUFFdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3ZGLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXIsIEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3RBcmdzICBleHRlbmRzIEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyQXJncyB7XG4gICAgbGltaXQ/IDogbnVtYmVyO1xuXHRuYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdCBleHRlbmRzIEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyIHtcblxuICAgIGxpbWl0IDogbnVtYmVyO1xuXHRuYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3QnIH0sXG5cdFx0XHRcdGxpbWl0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdCddID0gS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdDsiXX0=