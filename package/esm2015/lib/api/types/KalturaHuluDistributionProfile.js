/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaHuluDistributionProfile extends KalturaConfigurableDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.seriesAdditionalCategories === 'undefined')
            this.seriesAdditionalCategories = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhSHVsdURpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUI5SSxNQUFNLHFDQUFzQyxTQUFRLHNDQUFzQzs7OztJQXNCdEYsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQywwQkFBMEIsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDO0tBQ3BHOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDMUcsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG9DQUFvQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyRCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNySCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDeEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIHNmdHBIb3N0PyA6IHN0cmluZztcblx0c2Z0cExvZ2luPyA6IHN0cmluZztcblx0c2Z0cFBhc3M/IDogc3RyaW5nO1xuXHRzZXJpZXNDaGFubmVsPyA6IHN0cmluZztcblx0c2VyaWVzUHJpbWFyeUNhdGVnb3J5PyA6IHN0cmluZztcblx0c2VyaWVzQWRkaXRpb25hbENhdGVnb3JpZXM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRzZWFzb25OdW1iZXI/IDogc3RyaW5nO1xuXHRzZWFzb25TeW5vcHNpcz8gOiBzdHJpbmc7XG5cdHNlYXNvblR1bmVJbkluZm9ybWF0aW9uPyA6IHN0cmluZztcblx0dmlkZW9NZWRpYVR5cGU/IDogc3RyaW5nO1xuXHRkaXNhYmxlRXBpc29kZU51bWJlckN1c3RvbVZhbGlkYXRpb24/IDogYm9vbGVhbjtcblx0cHJvdG9jb2w/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sO1xuXHRhc3BlcmFIb3N0PyA6IHN0cmluZztcblx0YXNwZXJhTG9naW4/IDogc3RyaW5nO1xuXHRhc3BlcmFQYXNzPyA6IHN0cmluZztcblx0cG9ydD8gOiBudW1iZXI7XG5cdHBhc3NwaHJhc2U/IDogc3RyaW5nO1xuXHRhc3BlcmFQdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRhc3BlcmFQcml2YXRlS2V5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgc2Z0cEhvc3QgOiBzdHJpbmc7XG5cdHNmdHBMb2dpbiA6IHN0cmluZztcblx0c2Z0cFBhc3MgOiBzdHJpbmc7XG5cdHNlcmllc0NoYW5uZWwgOiBzdHJpbmc7XG5cdHNlcmllc1ByaW1hcnlDYXRlZ29yeSA6IHN0cmluZztcblx0c2VyaWVzQWRkaXRpb25hbENhdGVnb3JpZXMgOiBLYWx0dXJhU3RyaW5nW107XG5cdHNlYXNvbk51bWJlciA6IHN0cmluZztcblx0c2Vhc29uU3lub3BzaXMgOiBzdHJpbmc7XG5cdHNlYXNvblR1bmVJbkluZm9ybWF0aW9uIDogc3RyaW5nO1xuXHR2aWRlb01lZGlhVHlwZSA6IHN0cmluZztcblx0ZGlzYWJsZUVwaXNvZGVOdW1iZXJDdXN0b21WYWxpZGF0aW9uIDogYm9vbGVhbjtcblx0cHJvdG9jb2wgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2w7XG5cdGFzcGVyYUhvc3QgOiBzdHJpbmc7XG5cdGFzcGVyYUxvZ2luIDogc3RyaW5nO1xuXHRhc3BlcmFQYXNzIDogc3RyaW5nO1xuXHRwb3J0IDogbnVtYmVyO1xuXHRwYXNzcGhyYXNlIDogc3RyaW5nO1xuXHRhc3BlcmFQdWJsaWNLZXkgOiBzdHJpbmc7XG5cdGFzcGVyYVByaXZhdGVLZXkgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFIdWx1RGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlcmllc0FkZGl0aW9uYWxDYXRlZ29yaWVzID09PSAndW5kZWZpbmVkJykgdGhpcy5zZXJpZXNBZGRpdGlvbmFsQ2F0ZWdvcmllcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFIdWx1RGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0c2Z0cEhvc3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Z0cExvZ2luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBQYXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcmllc0NoYW5uZWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VyaWVzUHJpbWFyeUNhdGVnb3J5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcmllc0FkZGl0aW9uYWxDYXRlZ29yaWVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmcnIH0sXG5cdFx0XHRcdHNlYXNvbk51bWJlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWFzb25TeW5vcHNpcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWFzb25UdW5lSW5JbmZvcm1hdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2aWRlb01lZGlhVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXNhYmxlRXBpc29kZU51bWJlckN1c3RvbVZhbGlkYXRpb24gOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sJyB9LFxuXHRcdFx0XHRhc3BlcmFIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzcGVyYUxvZ2luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzcGVyYVBhc3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXNzcGhyYXNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzcGVyYVB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3BlcmFQcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFIdWx1RGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYUh1bHVEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==