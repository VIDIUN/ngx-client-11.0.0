/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaDataEntryArgs() { }
/** @type {?|undefined} */
KalturaDataEntryArgs.prototype.dataContent;
/** @type {?|undefined} */
KalturaDataEntryArgs.prototype.retrieveDataContentByGet;
export class KalturaDataEntry extends KalturaBaseEntry {
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
            objectType: { type: 'c', default: 'KalturaDataEntry' },
            dataContent: { type: 's' },
            retrieveDataContentByGet: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDataEntry.prototype.dataContent;
    /** @type {?} */
    KalturaDataEntry.prototype.retrieveDataContentByGet;
}
typesMappingStorage['KalturaDataEntry'] = KalturaDataEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURhdGFFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURhdGFFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0FBUTVFLE1BQU0sdUJBQXdCLFNBQVEsZ0JBQWdCOzs7O0lBS2xELFlBQVksSUFBNEI7UUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSwgS2FsdHVyYUJhc2VFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEYXRhRW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlRW50cnlBcmdzIHtcbiAgICBkYXRhQ29udGVudD8gOiBzdHJpbmc7XG5cdHJldHJpZXZlRGF0YUNvbnRlbnRCeUdldD8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGF0YUVudHJ5IGV4dGVuZHMgS2FsdHVyYUJhc2VFbnRyeSB7XG5cbiAgICBkYXRhQ29udGVudCA6IHN0cmluZztcblx0cmV0cmlldmVEYXRhQ29udGVudEJ5R2V0IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURhdGFFbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGF0YUVudHJ5JyB9LFxuXHRcdFx0XHRkYXRhQ29udGVudCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXRyaWV2ZURhdGFDb250ZW50QnlHZXQgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURhdGFFbnRyeSddID0gS2FsdHVyYURhdGFFbnRyeTsiXX0=