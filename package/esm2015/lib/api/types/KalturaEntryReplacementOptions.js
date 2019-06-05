/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaEntryReplacementOptions extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.pluginOptionItems === 'undefined')
            this.pluginOptionItems = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryReplacementOptions' },
            keepManualThumbnails: { type: 'n' },
            pluginOptionItems: { type: 'a', subTypeConstructor: KalturaPluginReplacementOptionsItem, subType: 'KalturaPluginReplacementOptionsItem' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryReplacementOptions.prototype.keepManualThumbnails;
    /** @type {?} */
    KalturaEntryReplacementOptions.prototype.pluginOptionItems;
}
typesMappingStorage['KalturaEntryReplacementOptions'] = KalturaEntryReplacementOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7OztBQVFsRixNQUFNLHFDQUFzQyxTQUFRLGlCQUFpQjs7OztJQUtqRSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDbEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1NBQ3BJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsdWdpblJlcGxhY2VtZW50T3B0aW9uc0l0ZW0gfSBmcm9tICcuL0thbHR1cmFQbHVnaW5SZXBsYWNlbWVudE9wdGlvbnNJdGVtJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAga2VlcE1hbnVhbFRodW1ibmFpbHM/IDogbnVtYmVyO1xuXHRwbHVnaW5PcHRpb25JdGVtcz8gOiBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBrZWVwTWFudWFsVGh1bWJuYWlscyA6IG51bWJlcjtcblx0cGx1Z2luT3B0aW9uSXRlbXMgOiBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wbHVnaW5PcHRpb25JdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucGx1Z2luT3B0aW9uSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMnIH0sXG5cdFx0XHRcdGtlZXBNYW51YWxUaHVtYm5haWxzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBsdWdpbk9wdGlvbkl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zJ10gPSBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnM7Il19