/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaFtpDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.host;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.port;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.basePath;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.passphrase;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.sftpPublicKey;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.sftpPrivateKey;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.disableMetadata;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.metadataXslt;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.metadataFilenameXslt;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.flavorAssetFilenameXslt;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.thumbnailAssetFilenameXslt;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.assetFilenameXslt;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.asperaPublicKey;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.asperaPrivateKey;
/** @type {?|undefined} */
KalturaFtpDistributionProfileArgs.prototype.sendMetadataAfterAssets;
export class KalturaFtpDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaFtpDistributionProfile' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            host: { type: 's' },
            port: { type: 'n' },
            basePath: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            passphrase: { type: 's' },
            sftpPublicKey: { type: 's' },
            sftpPrivateKey: { type: 's' },
            disableMetadata: { type: 'b' },
            metadataXslt: { type: 's' },
            metadataFilenameXslt: { type: 's' },
            flavorAssetFilenameXslt: { type: 's' },
            thumbnailAssetFilenameXslt: { type: 's' },
            assetFilenameXslt: { type: 's' },
            asperaPublicKey: { type: 's' },
            asperaPrivateKey: { type: 's' },
            sendMetadataAfterAssets: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.protocol;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.host;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.port;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.basePath;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.passphrase;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.sftpPublicKey;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.sftpPrivateKey;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.disableMetadata;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.metadataXslt;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.metadataFilenameXslt;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.flavorAssetFilenameXslt;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.thumbnailAssetFilenameXslt;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.assetFilenameXslt;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.asperaPublicKey;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.asperaPrivateKey;
    /** @type {?} */
    KalturaFtpDistributionProfile.prototype.sendMetadataAfterAssets;
}
typesMappingStorage['KalturaFtpDistributionProfile'] = KalturaFtpDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGdHBEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCOUksTUFBTSxvQ0FBcUMsU0FBUSxzQ0FBc0M7Ozs7SUFxQnJGLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGdHBEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIHByb3RvY29sPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0aG9zdD8gOiBzdHJpbmc7XG5cdHBvcnQ/IDogbnVtYmVyO1xuXHRiYXNlUGF0aD8gOiBzdHJpbmc7XG5cdHVzZXJuYW1lPyA6IHN0cmluZztcblx0cGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRwYXNzcGhyYXNlPyA6IHN0cmluZztcblx0c2Z0cFB1YmxpY0tleT8gOiBzdHJpbmc7XG5cdHNmdHBQcml2YXRlS2V5PyA6IHN0cmluZztcblx0ZGlzYWJsZU1ldGFkYXRhPyA6IGJvb2xlYW47XG5cdG1ldGFkYXRhWHNsdD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhRmlsZW5hbWVYc2x0PyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRGaWxlbmFtZVhzbHQ/IDogc3RyaW5nO1xuXHR0aHVtYm5haWxBc3NldEZpbGVuYW1lWHNsdD8gOiBzdHJpbmc7XG5cdGFzc2V0RmlsZW5hbWVYc2x0PyA6IHN0cmluZztcblx0YXNwZXJhUHVibGljS2V5PyA6IHN0cmluZztcblx0YXNwZXJhUHJpdmF0ZUtleT8gOiBzdHJpbmc7XG5cdHNlbmRNZXRhZGF0YUFmdGVyQXNzZXRzPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGdHBEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgcHJvdG9jb2wgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2w7XG5cdGhvc3QgOiBzdHJpbmc7XG5cdHBvcnQgOiBudW1iZXI7XG5cdGJhc2VQYXRoIDogc3RyaW5nO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0cGFzc3dvcmQgOiBzdHJpbmc7XG5cdHBhc3NwaHJhc2UgOiBzdHJpbmc7XG5cdHNmdHBQdWJsaWNLZXkgOiBzdHJpbmc7XG5cdHNmdHBQcml2YXRlS2V5IDogc3RyaW5nO1xuXHRkaXNhYmxlTWV0YWRhdGEgOiBib29sZWFuO1xuXHRtZXRhZGF0YVhzbHQgOiBzdHJpbmc7XG5cdG1ldGFkYXRhRmlsZW5hbWVYc2x0IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldEZpbGVuYW1lWHNsdCA6IHN0cmluZztcblx0dGh1bWJuYWlsQXNzZXRGaWxlbmFtZVhzbHQgOiBzdHJpbmc7XG5cdGFzc2V0RmlsZW5hbWVYc2x0IDogc3RyaW5nO1xuXHRhc3BlcmFQdWJsaWNLZXkgOiBzdHJpbmc7XG5cdGFzcGVyYVByaXZhdGVLZXkgOiBzdHJpbmc7XG5cdHNlbmRNZXRhZGF0YUFmdGVyQXNzZXRzIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCcgfSxcblx0XHRcdFx0aG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwb3J0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhc2VQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3NwaHJhc2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Z0cFB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUHJpdmF0ZUtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXNhYmxlTWV0YWRhdGEgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0bWV0YWRhdGFYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhRmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0RmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1ibmFpbEFzc2V0RmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0RmlsZW5hbWVYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzcGVyYVB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhc3BlcmFQcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlbmRNZXRhZGF0YUFmdGVyQXNzZXRzIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGdHBEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=