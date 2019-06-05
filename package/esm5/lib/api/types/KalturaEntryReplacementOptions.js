/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginReplacementOptionsItem } from './KalturaPluginReplacementOptionsItem';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEntryReplacementOptionsArgs() { }
/** @type {?|undefined} */
KalturaEntryReplacementOptionsArgs.prototype.keepManualThumbnails;
/** @type {?|undefined} */
KalturaEntryReplacementOptionsArgs.prototype.pluginOptionItems;
var KalturaEntryReplacementOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryReplacementOptions, _super);
    function KalturaEntryReplacementOptions(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.pluginOptionItems === 'undefined')
            _this.pluginOptionItems = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEntryReplacementOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryReplacementOptions' },
            keepManualThumbnails: { type: 'n' },
            pluginOptionItems: { type: 'a', subTypeConstructor: KalturaPluginReplacementOptionsItem, subType: 'KalturaPluginReplacementOptionsItem' }
        });
        return result;
    };
    return KalturaEntryReplacementOptions;
}(KalturaObjectBase));
export { KalturaEntryReplacementOptions };
if (false) {
    /** @type {?} */
    KalturaEntryReplacementOptions.prototype.keepManualThumbnails;
    /** @type {?} */
    KalturaEntryReplacementOptions.prototype.pluginOptionItems;
}
typesMappingStorage['KalturaEntryReplacementOptions'] = KalturaEntryReplacementOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUFvRCwwREFBaUI7SUFLakUsd0NBQVksSUFBMEM7UUFBdEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7O0tBQ2xGOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQ0FBbUMsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7U0FDcEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0FsQ0w7RUFXb0QsaUJBQWlCLEVBd0JwRSxDQUFBO0FBeEJELDBDQXdCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsdWdpblJlcGxhY2VtZW50T3B0aW9uc0l0ZW0gfSBmcm9tICcuL0thbHR1cmFQbHVnaW5SZXBsYWNlbWVudE9wdGlvbnNJdGVtJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAga2VlcE1hbnVhbFRodW1ibmFpbHM/IDogbnVtYmVyO1xuXHRwbHVnaW5PcHRpb25JdGVtcz8gOiBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBrZWVwTWFudWFsVGh1bWJuYWlscyA6IG51bWJlcjtcblx0cGx1Z2luT3B0aW9uSXRlbXMgOiBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wbHVnaW5PcHRpb25JdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucGx1Z2luT3B0aW9uSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMnIH0sXG5cdFx0XHRcdGtlZXBNYW51YWxUaHVtYm5haWxzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBsdWdpbk9wdGlvbkl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zJ10gPSBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnM7Il19