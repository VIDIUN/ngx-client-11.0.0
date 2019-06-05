/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaHuluDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.sftpHost;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.sftpLogin;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.sftpPass;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.seriesChannel;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.seriesPrimaryCategory;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.seriesAdditionalCategories;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.seasonNumber;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.seasonSynopsis;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.seasonTuneInInformation;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.videoMediaType;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.disableEpisodeNumberCustomValidation;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.asperaHost;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.asperaLogin;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.asperaPass;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.port;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.passphrase;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.asperaPublicKey;
/** @type {?|undefined} */
KalturaHuluDistributionProfileArgs.prototype.asperaPrivateKey;
var KalturaHuluDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHuluDistributionProfile, _super);
    function KalturaHuluDistributionProfile(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.seriesAdditionalCategories === 'undefined')
            _this.seriesAdditionalCategories = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaHuluDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHuluDistributionProfile' },
            sftpHost: { type: 's' },
            sftpLogin: { type: 's' },
            sftpPass: { type: 's' },
            seriesChannel: { type: 's' },
            seriesPrimaryCategory: { type: 's' },
            seriesAdditionalCategories: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            seasonNumber: { type: 's' },
            seasonSynopsis: { type: 's' },
            seasonTuneInInformation: { type: 's' },
            videoMediaType: { type: 's' },
            disableEpisodeNumberCustomValidation: { type: 'b' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            asperaHost: { type: 's' },
            asperaLogin: { type: 's' },
            asperaPass: { type: 's' },
            port: { type: 'n' },
            passphrase: { type: 's' },
            asperaPublicKey: { type: 's' },
            asperaPrivateKey: { type: 's' }
        });
        return result;
    };
    return KalturaHuluDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaHuluDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.sftpHost;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.sftpLogin;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.sftpPass;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.seriesChannel;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.seriesPrimaryCategory;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.seriesAdditionalCategories;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.seasonNumber;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.seasonSynopsis;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.seasonTuneInInformation;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.videoMediaType;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.disableEpisodeNumberCustomValidation;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.protocol;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.asperaHost;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.asperaLogin;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.asperaPass;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.port;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.passphrase;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.asperaPublicKey;
    /** @type {?} */
    KalturaHuluDistributionProfile.prototype.asperaPrivateKey;
}
typesMappingStorage['KalturaHuluDistributionProfile'] = KalturaHuluDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSHVsdURpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCOUksSUFBQTtJQUFvRCwwREFBc0M7SUFzQnRGLHdDQUFZLElBQTBDO1FBQXRELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQywwQkFBMEIsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDOztLQUNwRzs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMxRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isb0NBQW9DLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN4QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQXRGTDtFQTZCb0Qsc0NBQXNDLEVBMER6RixDQUFBO0FBMURELDBDQTBEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBzZnRwSG9zdD8gOiBzdHJpbmc7XG5cdHNmdHBMb2dpbj8gOiBzdHJpbmc7XG5cdHNmdHBQYXNzPyA6IHN0cmluZztcblx0c2VyaWVzQ2hhbm5lbD8gOiBzdHJpbmc7XG5cdHNlcmllc1ByaW1hcnlDYXRlZ29yeT8gOiBzdHJpbmc7XG5cdHNlcmllc0FkZGl0aW9uYWxDYXRlZ29yaWVzPyA6IEthbHR1cmFTdHJpbmdbXTtcblx0c2Vhc29uTnVtYmVyPyA6IHN0cmluZztcblx0c2Vhc29uU3lub3BzaXM/IDogc3RyaW5nO1xuXHRzZWFzb25UdW5lSW5JbmZvcm1hdGlvbj8gOiBzdHJpbmc7XG5cdHZpZGVvTWVkaWFUeXBlPyA6IHN0cmluZztcblx0ZGlzYWJsZUVwaXNvZGVOdW1iZXJDdXN0b21WYWxpZGF0aW9uPyA6IGJvb2xlYW47XG5cdHByb3RvY29sPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0YXNwZXJhSG9zdD8gOiBzdHJpbmc7XG5cdGFzcGVyYUxvZ2luPyA6IHN0cmluZztcblx0YXNwZXJhUGFzcz8gOiBzdHJpbmc7XG5cdHBvcnQ/IDogbnVtYmVyO1xuXHRwYXNzcGhyYXNlPyA6IHN0cmluZztcblx0YXNwZXJhUHVibGljS2V5PyA6IHN0cmluZztcblx0YXNwZXJhUHJpdmF0ZUtleT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIHNmdHBIb3N0IDogc3RyaW5nO1xuXHRzZnRwTG9naW4gOiBzdHJpbmc7XG5cdHNmdHBQYXNzIDogc3RyaW5nO1xuXHRzZXJpZXNDaGFubmVsIDogc3RyaW5nO1xuXHRzZXJpZXNQcmltYXJ5Q2F0ZWdvcnkgOiBzdHJpbmc7XG5cdHNlcmllc0FkZGl0aW9uYWxDYXRlZ29yaWVzIDogS2FsdHVyYVN0cmluZ1tdO1xuXHRzZWFzb25OdW1iZXIgOiBzdHJpbmc7XG5cdHNlYXNvblN5bm9wc2lzIDogc3RyaW5nO1xuXHRzZWFzb25UdW5lSW5JbmZvcm1hdGlvbiA6IHN0cmluZztcblx0dmlkZW9NZWRpYVR5cGUgOiBzdHJpbmc7XG5cdGRpc2FibGVFcGlzb2RlTnVtYmVyQ3VzdG9tVmFsaWRhdGlvbiA6IGJvb2xlYW47XG5cdHByb3RvY29sIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sO1xuXHRhc3BlcmFIb3N0IDogc3RyaW5nO1xuXHRhc3BlcmFMb2dpbiA6IHN0cmluZztcblx0YXNwZXJhUGFzcyA6IHN0cmluZztcblx0cG9ydCA6IG51bWJlcjtcblx0cGFzc3BocmFzZSA6IHN0cmluZztcblx0YXNwZXJhUHVibGljS2V5IDogc3RyaW5nO1xuXHRhc3BlcmFQcml2YXRlS2V5IDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhSHVsdURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZXJpZXNBZGRpdGlvbmFsQ2F0ZWdvcmllcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc2VyaWVzQWRkaXRpb25hbENhdGVnb3JpZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSHVsdURpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHNmdHBIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBMb2dpbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUGFzcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJpZXNDaGFubmVsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcmllc1ByaW1hcnlDYXRlZ29yeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJpZXNBZGRpdGlvbmFsQ2F0ZWdvcmllcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHRzZWFzb25OdW1iZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Vhc29uU3lub3BzaXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Vhc29uVHVuZUluSW5mb3JtYXRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmlkZW9NZWRpYVR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlzYWJsZUVwaXNvZGVOdW1iZXJDdXN0b21WYWxpZGF0aW9uIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCcgfSxcblx0XHRcdFx0YXNwZXJhSG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3BlcmFMb2dpbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3BlcmFQYXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBvcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFzc3BocmFzZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3BlcmFQdWJsaWNLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNwZXJhUHJpdmF0ZUtleSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhSHVsdURpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=