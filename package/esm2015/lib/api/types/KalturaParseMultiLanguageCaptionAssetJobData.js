/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaParseMultiLanguageCaptionAssetJobDataArgs() { }
/** @type {?|undefined} */
KalturaParseMultiLanguageCaptionAssetJobDataArgs.prototype.multiLanaguageCaptionAssetId;
/** @type {?|undefined} */
KalturaParseMultiLanguageCaptionAssetJobDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaParseMultiLanguageCaptionAssetJobDataArgs.prototype.fileLocation;
/** @type {?|undefined} */
KalturaParseMultiLanguageCaptionAssetJobDataArgs.prototype.fileEncryptionKey;
export class KalturaParseMultiLanguageCaptionAssetJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaParseMultiLanguageCaptionAssetJobData' },
            multiLanaguageCaptionAssetId: { type: 's' },
            entryId: { type: 's' },
            fileLocation: { type: 's' },
            fileEncryptionKey: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaParseMultiLanguageCaptionAssetJobData.prototype.multiLanaguageCaptionAssetId;
    /** @type {?} */
    KalturaParseMultiLanguageCaptionAssetJobData.prototype.entryId;
    /** @type {?} */
    KalturaParseMultiLanguageCaptionAssetJobData.prototype.fileLocation;
    /** @type {?} */
    KalturaParseMultiLanguageCaptionAssetJobData.prototype.fileEncryptionKey;
}
typesMappingStorage['KalturaParseMultiLanguageCaptionAssetJobData'] = KalturaParseMultiLanguageCaptionAssetJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnNlTXVsdGlMYW5ndWFnZUNhcHRpb25Bc3NldEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQYXJzZU11bHRpTGFuZ3VhZ2VDYXB0aW9uQXNzZXRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVV0RSxNQUFNLG1EQUFvRCxTQUFRLGNBQWM7Ozs7SUFPNUUsWUFBWSxJQUF3RDtRQUVoRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOENBQThDLEVBQUU7WUFDakcsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDekIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhDQUE4QyxDQUFDLEdBQUcsNENBQTRDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQYXJzZU11bHRpTGFuZ3VhZ2VDYXB0aW9uQXNzZXRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIG11bHRpTGFuYWd1YWdlQ2FwdGlvbkFzc2V0SWQ/IDogc3RyaW5nO1xuXHRlbnRyeUlkPyA6IHN0cmluZztcblx0ZmlsZUxvY2F0aW9uPyA6IHN0cmluZztcblx0ZmlsZUVuY3J5cHRpb25LZXk/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGFyc2VNdWx0aUxhbmd1YWdlQ2FwdGlvbkFzc2V0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIG11bHRpTGFuYWd1YWdlQ2FwdGlvbkFzc2V0SWQgOiBzdHJpbmc7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZpbGVMb2NhdGlvbiA6IHN0cmluZztcblx0ZmlsZUVuY3J5cHRpb25LZXkgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQYXJzZU11bHRpTGFuZ3VhZ2VDYXB0aW9uQXNzZXRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQYXJzZU11bHRpTGFuZ3VhZ2VDYXB0aW9uQXNzZXRKb2JEYXRhJyB9LFxuXHRcdFx0XHRtdWx0aUxhbmFndWFnZUNhcHRpb25Bc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZUxvY2F0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVFbmNyeXB0aW9uS2V5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQYXJzZU11bHRpTGFuZ3VhZ2VDYXB0aW9uQXNzZXRKb2JEYXRhJ10gPSBLYWx0dXJhUGFyc2VNdWx0aUxhbmd1YWdlQ2FwdGlvbkFzc2V0Sm9iRGF0YTsiXX0=