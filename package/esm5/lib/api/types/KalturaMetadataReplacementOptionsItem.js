/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginReplacementOptionsItem } from './KalturaPluginReplacementOptionsItem';
/**
 * @record
 */
export function KalturaMetadataReplacementOptionsItemArgs() { }
/** @type {?|undefined} */
KalturaMetadataReplacementOptionsItemArgs.prototype.shouldCopyMetadata;
var KalturaMetadataReplacementOptionsItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataReplacementOptionsItem, _super);
    function KalturaMetadataReplacementOptionsItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataReplacementOptionsItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetadataReplacementOptionsItem' },
            shouldCopyMetadata: { type: 'b' }
        });
        return result;
    };
    return KalturaMetadataReplacementOptionsItem;
}(KalturaPluginReplacementOptionsItem));
export { KalturaMetadataReplacementOptionsItem };
if (false) {
    /** @type {?} */
    KalturaMetadataReplacementOptionsItem.prototype.shouldCopyMetadata;
}
typesMappingStorage['KalturaMetadataReplacementOptionsItem'] = KalturaMetadataReplacementOptionsItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQTJDLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7QUFPckksSUFBQTtJQUEyRCxpRUFBbUM7SUFJMUYsK0NBQVksSUFBaUQ7ZUFFekQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDMUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE3Qkw7RUFTMkQsbUNBQW1DLEVBcUI3RixDQUFBO0FBckJELGlEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1Q0FBdUMsQ0FBQyxHQUFHLHFDQUFxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbHVnaW5SZXBsYWNlbWVudE9wdGlvbnNJdGVtLCBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbHVnaW5SZXBsYWNlbWVudE9wdGlvbnNJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWV0YWRhdGFSZXBsYWNlbWVudE9wdGlvbnNJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbUFyZ3Mge1xuICAgIHNob3VsZENvcHlNZXRhZGF0YT8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWV0YWRhdGFSZXBsYWNlbWVudE9wdGlvbnNJdGVtIGV4dGVuZHMgS2FsdHVyYVBsdWdpblJlcGxhY2VtZW50T3B0aW9uc0l0ZW0ge1xuXG4gICAgc2hvdWxkQ29weU1ldGFkYXRhIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0YWRhdGFSZXBsYWNlbWVudE9wdGlvbnNJdGVtJyB9LFxuXHRcdFx0XHRzaG91bGRDb3B5TWV0YWRhdGEgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbSddID0gS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbTsiXX0=