/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCaptionAssetItemArgs() { }
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.asset;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.entry;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.endTime;
/** @type {?|undefined} */
KalturaCaptionAssetItemArgs.prototype.content;
var KalturaCaptionAssetItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCaptionAssetItem, _super);
    function KalturaCaptionAssetItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCaptionAssetItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCaptionAssetItem' },
            asset: { type: 'o', subTypeConstructor: KalturaCaptionAsset, subType: 'KalturaCaptionAsset' },
            entry: { type: 'o', subTypeConstructor: KalturaBaseEntry, subType: 'KalturaBaseEntry' },
            startTime: { type: 'n' },
            endTime: { type: 'n' },
            content: { type: 's' }
        });
        return result;
    };
    return KalturaCaptionAssetItem;
}(KalturaObjectBase));
export { KalturaCaptionAssetItem };
if (false) {
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.asset;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.entry;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.startTime;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.endTime;
    /** @type {?} */
    KalturaCaptionAssetItem.prototype.content;
}
typesMappingStorage['KalturaCaptionAssetItem'] = KalturaCaptionAssetItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXB0aW9uQXNzZXRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLElBQUE7SUFBNkMsbURBQWlCO0lBUTFELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDakcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDM0YsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQTNDTDtFQWU2QyxpQkFBaUIsRUE2QjdELENBQUE7QUE3QkQsbUNBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvbkFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhQ2FwdGlvbkFzc2V0JztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnkgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDYXB0aW9uQXNzZXRJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGFzc2V0PyA6IEthbHR1cmFDYXB0aW9uQXNzZXQ7XG5cdGVudHJ5PyA6IEthbHR1cmFCYXNlRW50cnk7XG5cdHN0YXJ0VGltZT8gOiBudW1iZXI7XG5cdGVuZFRpbWU/IDogbnVtYmVyO1xuXHRjb250ZW50PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW0gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBhc3NldCA6IEthbHR1cmFDYXB0aW9uQXNzZXQ7XG5cdGVudHJ5IDogS2FsdHVyYUJhc2VFbnRyeTtcblx0c3RhcnRUaW1lIDogbnVtYmVyO1xuXHRlbmRUaW1lIDogbnVtYmVyO1xuXHRjb250ZW50IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbScgfSxcblx0XHRcdFx0YXNzZXQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uQXNzZXQsIHN1YlR5cGUgOiAnS2FsdHVyYUNhcHRpb25Bc3NldCcgfSxcblx0XHRcdFx0ZW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnksIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScgfSxcblx0XHRcdFx0c3RhcnRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udGVudCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2FwdGlvbkFzc2V0SXRlbSddID0gS2FsdHVyYUNhcHRpb25Bc3NldEl0ZW07Il19