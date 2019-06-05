/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaUverseDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelTitle;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelLink;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelDescription;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelLanguage;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelCopyright;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelImageTitle;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelImageUrl;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.channelImageLink;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.ftpHost;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.ftpLogin;
/** @type {?|undefined} */
KalturaUverseDistributionProfileArgs.prototype.ftpPassword;
export class KalturaUverseDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaUverseDistributionProfile' },
            feedUrl: { type: 's', readOnly: true },
            channelTitle: { type: 's' },
            channelLink: { type: 's' },
            channelDescription: { type: 's' },
            channelLanguage: { type: 's' },
            channelCopyright: { type: 's' },
            channelImageTitle: { type: 's' },
            channelImageUrl: { type: 's' },
            channelImageLink: { type: 's' },
            ftpHost: { type: 's' },
            ftpLogin: { type: 's' },
            ftpPassword: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.feedUrl;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelTitle;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelLink;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelDescription;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelLanguage;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelCopyright;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelImageTitle;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelImageUrl;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.channelImageLink;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.ftpHost;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.ftpLogin;
    /** @type {?} */
    KalturaUverseDistributionProfile.prototype.ftpPassword;
}
typesMappingStorage['KalturaUverseDistributionProfile'] = KalturaUverseDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjlJLE1BQU0sdUNBQXdDLFNBQVEsc0NBQXNDOzs7O0lBZXhGLFlBQVksSUFBNEM7UUFFcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN6QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVdmVyc2VEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGNoYW5uZWxUaXRsZT8gOiBzdHJpbmc7XG5cdGNoYW5uZWxMaW5rPyA6IHN0cmluZztcblx0Y2hhbm5lbERlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0Y2hhbm5lbExhbmd1YWdlPyA6IHN0cmluZztcblx0Y2hhbm5lbENvcHlyaWdodD8gOiBzdHJpbmc7XG5cdGNoYW5uZWxJbWFnZVRpdGxlPyA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVXJsPyA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlTGluaz8gOiBzdHJpbmc7XG5cdGZ0cEhvc3Q/IDogc3RyaW5nO1xuXHRmdHBMb2dpbj8gOiBzdHJpbmc7XG5cdGZ0cFBhc3N3b3JkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICByZWFkb25seSBmZWVkVXJsIDogc3RyaW5nO1xuXHRjaGFubmVsVGl0bGUgOiBzdHJpbmc7XG5cdGNoYW5uZWxMaW5rIDogc3RyaW5nO1xuXHRjaGFubmVsRGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGNoYW5uZWxMYW5ndWFnZSA6IHN0cmluZztcblx0Y2hhbm5lbENvcHlyaWdodCA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlVGl0bGUgOiBzdHJpbmc7XG5cdGNoYW5uZWxJbWFnZVVybCA6IHN0cmluZztcblx0Y2hhbm5lbEltYWdlTGluayA6IHN0cmluZztcblx0ZnRwSG9zdCA6IHN0cmluZztcblx0ZnRwTG9naW4gOiBzdHJpbmc7XG5cdGZ0cFBhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0ZmVlZFVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNoYW5uZWxUaXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsRGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbExhbmd1YWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxDb3B5cmlnaHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEltYWdlVGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbEltYWdlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNoYW5uZWxJbWFnZUxpbmsgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwSG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBMb2dpbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmdHBQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXZlcnNlRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVV2ZXJzZURpc3RyaWJ1dGlvblByb2ZpbGU7Il19