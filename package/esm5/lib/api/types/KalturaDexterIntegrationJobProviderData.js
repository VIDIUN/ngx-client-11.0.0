/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
/**
 * @record
 */
export function KalturaDexterIntegrationJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.transcriptAssetId;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.voicebaseApiKey;
/** @type {?|undefined} */
KalturaDexterIntegrationJobProviderDataArgs.prototype.voicebaseApiPassword;
var KalturaDexterIntegrationJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDexterIntegrationJobProviderData, _super);
    function KalturaDexterIntegrationJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDexterIntegrationJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDexterIntegrationJobProviderData' },
            metadataProfileId: { type: 'n' },
            transcriptAssetId: { type: 's' },
            entryId: { type: 's' },
            voicebaseApiKey: { type: 's' },
            voicebaseApiPassword: { type: 's' }
        });
        return result;
    };
    return KalturaDexterIntegrationJobProviderData;
}(KalturaIntegrationJobProviderData));
export { KalturaDexterIntegrationJobProviderData };
if (false) {
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.metadataProfileId;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.transcriptAssetId;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.entryId;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.voicebaseApiKey;
    /** @type {?} */
    KalturaDexterIntegrationJobProviderData.prototype.voicebaseApiPassword;
}
typesMappingStorage['KalturaDexterIntegrationJobProviderData'] = KalturaDexterIntegrationJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGV4dGVySW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXL0gsSUFBQTtJQUE2RCxtRUFBaUM7SUFRMUYsaURBQVksSUFBbUQ7ZUFFM0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUM1RixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrREF6Q0w7RUFhNkQsaUNBQWlDLEVBNkI3RixDQUFBO0FBN0JELG1EQTZCQzs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLEdBQUcsdUNBQXVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZXh0ZXJJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHR0cmFuc2NyaXB0QXNzZXRJZD8gOiBzdHJpbmc7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR2b2ljZWJhc2VBcGlLZXk/IDogc3RyaW5nO1xuXHR2b2ljZWJhc2VBcGlQYXNzd29yZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZXh0ZXJJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0dHJhbnNjcmlwdEFzc2V0SWQgOiBzdHJpbmc7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHZvaWNlYmFzZUFwaUtleSA6IHN0cmluZztcblx0dm9pY2ViYXNlQXBpUGFzc3dvcmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZXh0ZXJJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGV4dGVySW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRyYW5zY3JpcHRBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dm9pY2ViYXNlQXBpS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZvaWNlYmFzZUFwaVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZXh0ZXJJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYURleHRlckludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhOyJdfQ==