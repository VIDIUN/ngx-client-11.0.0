/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaFtpDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFtpDistributionProfile, _super);
    function KalturaFtpDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFtpDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaFtpDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaFtpDistributionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGdHBEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QjlJLElBQUE7SUFBbUQseURBQXNDO0lBcUJyRix1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQWpGTDtFQTJCbUQsc0NBQXNDLEVBdUR4RixDQUFBO0FBdkRELHlDQXVEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgcHJvdG9jb2w/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sO1xuXHRob3N0PyA6IHN0cmluZztcblx0cG9ydD8gOiBudW1iZXI7XG5cdGJhc2VQYXRoPyA6IHN0cmluZztcblx0dXNlcm5hbWU/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG5cdHBhc3NwaHJhc2U/IDogc3RyaW5nO1xuXHRzZnRwUHVibGljS2V5PyA6IHN0cmluZztcblx0c2Z0cFByaXZhdGVLZXk/IDogc3RyaW5nO1xuXHRkaXNhYmxlTWV0YWRhdGE/IDogYm9vbGVhbjtcblx0bWV0YWRhdGFYc2x0PyA6IHN0cmluZztcblx0bWV0YWRhdGFGaWxlbmFtZVhzbHQ/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldEZpbGVuYW1lWHNsdD8gOiBzdHJpbmc7XG5cdHRodW1ibmFpbEFzc2V0RmlsZW5hbWVYc2x0PyA6IHN0cmluZztcblx0YXNzZXRGaWxlbmFtZVhzbHQ/IDogc3RyaW5nO1xuXHRhc3BlcmFQdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRhc3BlcmFQcml2YXRlS2V5PyA6IHN0cmluZztcblx0c2VuZE1ldGFkYXRhQWZ0ZXJBc3NldHM/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBwcm90b2NvbCA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0aG9zdCA6IHN0cmluZztcblx0cG9ydCA6IG51bWJlcjtcblx0YmFzZVBhdGggOiBzdHJpbmc7XG5cdHVzZXJuYW1lIDogc3RyaW5nO1xuXHRwYXNzd29yZCA6IHN0cmluZztcblx0cGFzc3BocmFzZSA6IHN0cmluZztcblx0c2Z0cFB1YmxpY0tleSA6IHN0cmluZztcblx0c2Z0cFByaXZhdGVLZXkgOiBzdHJpbmc7XG5cdGRpc2FibGVNZXRhZGF0YSA6IGJvb2xlYW47XG5cdG1ldGFkYXRhWHNsdCA6IHN0cmluZztcblx0bWV0YWRhdGFGaWxlbmFtZVhzbHQgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0RmlsZW5hbWVYc2x0IDogc3RyaW5nO1xuXHR0aHVtYm5haWxBc3NldEZpbGVuYW1lWHNsdCA6IHN0cmluZztcblx0YXNzZXRGaWxlbmFtZVhzbHQgOiBzdHJpbmc7XG5cdGFzcGVyYVB1YmxpY0tleSA6IHN0cmluZztcblx0YXNwZXJhUHJpdmF0ZUtleSA6IHN0cmluZztcblx0c2VuZE1ldGFkYXRhQWZ0ZXJBc3NldHMgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnRwRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sJyB9LFxuXHRcdFx0XHRob3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBvcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmFzZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3dvcmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc3BocmFzZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBQcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpc2FibGVNZXRhZGF0YSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVhzbHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFGaWxlbmFtZVhzbHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRGaWxlbmFtZVhzbHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJuYWlsQXNzZXRGaWxlbmFtZVhzbHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRGaWxlbmFtZVhzbHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNwZXJhUHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzcGVyYVByaXZhdGVLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VuZE1ldGFkYXRhQWZ0ZXJBc3NldHMgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFGdHBEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==