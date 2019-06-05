/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaDocumentEntryArgs() { }
/** @type {?|undefined} */
KalturaDocumentEntryArgs.prototype.documentType;
var KalturaDocumentEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDocumentEntry, _super);
    function KalturaDocumentEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDocumentEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDocumentEntry' },
            documentType: { type: 'en', subTypeConstructor: KalturaDocumentType, subType: 'KalturaDocumentType' },
            assetParamsIds: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaDocumentEntry;
}(KalturaBaseEntry));
export { KalturaDocumentEntry };
if (false) {
    /** @type {?} */
    KalturaDocumentEntry.prototype.documentType;
    /** @type {?} */
    KalturaDocumentEntry.prototype.assetParamsIds;
}
typesMappingStorage['KalturaDocumentEntry'] = KalturaDocumentEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURvY3VtZW50RW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEb2N1bWVudEVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztBQU81RSxJQUFBO0lBQTBDLGdEQUFnQjtJQUt0RCw4QkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3pHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUN2QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQWhDTDtFQVUwQyxnQkFBZ0IsRUF1QnpELENBQUE7QUF2QkQsZ0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRG9jdW1lbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRG9jdW1lbnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnksIEthbHR1cmFCYXNlRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRG9jdW1lbnRFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeUFyZ3Mge1xuICAgIGRvY3VtZW50VHlwZT8gOiBLYWx0dXJhRG9jdW1lbnRUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRG9jdW1lbnRFbnRyeSBleHRlbmRzIEthbHR1cmFCYXNlRW50cnkge1xuXG4gICAgZG9jdW1lbnRUeXBlIDogS2FsdHVyYURvY3VtZW50VHlwZTtcblx0cmVhZG9ubHkgYXNzZXRQYXJhbXNJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEb2N1bWVudEVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEb2N1bWVudEVudHJ5JyB9LFxuXHRcdFx0XHRkb2N1bWVudFR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRG9jdW1lbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEb2N1bWVudFR5cGUnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURvY3VtZW50RW50cnknXSA9IEthbHR1cmFEb2N1bWVudEVudHJ5OyJdfQ==