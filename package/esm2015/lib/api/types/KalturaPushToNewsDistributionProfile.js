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
export function KalturaPushToNewsDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.host;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.ips;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.port;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.basePath;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.password;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.certificateKey;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.bodyXslt;
/** @type {?|undefined} */
KalturaPushToNewsDistributionProfileArgs.prototype.recentNewsTimeInterval;
export class KalturaPushToNewsDistributionProfile extends KalturaConfigurableDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaPushToNewsDistributionProfile' },
            protocol: { type: 'en', subTypeConstructor: KalturaDistributionProtocol, subType: 'KalturaDistributionProtocol' },
            host: { type: 's' },
            ips: { type: 's' },
            port: { type: 'n' },
            basePath: { type: 's' },
            username: { type: 's' },
            password: { type: 's' },
            certificateKey: { type: 's' },
            bodyXslt: { type: 's' },
            recentNewsTimeInterval: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.protocol;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.host;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.ips;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.port;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.basePath;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.password;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.certificateKey;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.bodyXslt;
    /** @type {?} */
    KalturaPushToNewsDistributionProfile.prototype.recentNewsTimeInterval;
}
typesMappingStorage['KalturaPushToNewsDistributionProfile'] = KalturaPushToNewsDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjlJLE1BQU0sMkNBQTRDLFNBQVEsc0NBQXNDOzs7O0lBYTVGLFlBQVksSUFBZ0Q7UUFFeEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ3pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3JILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICBwcm90b2NvbD8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdG9jb2w7XG5cdGhvc3Q/IDogc3RyaW5nO1xuXHRpcHM/IDogc3RyaW5nO1xuXHRwb3J0PyA6IG51bWJlcjtcblx0YmFzZVBhdGg/IDogc3RyaW5nO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdHBhc3N3b3JkPyA6IHN0cmluZztcblx0Y2VydGlmaWNhdGVLZXk/IDogc3RyaW5nO1xuXHRib2R5WHNsdD8gOiBzdHJpbmc7XG5cdHJlY2VudE5ld3NUaW1lSW50ZXJ2YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBwcm90b2NvbCA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbDtcblx0aG9zdCA6IHN0cmluZztcblx0aXBzIDogc3RyaW5nO1xuXHRwb3J0IDogbnVtYmVyO1xuXHRiYXNlUGF0aCA6IHN0cmluZztcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXHRjZXJ0aWZpY2F0ZUtleSA6IHN0cmluZztcblx0Ym9keVhzbHQgOiBzdHJpbmc7XG5cdHJlY2VudE5ld3NUaW1lSW50ZXJ2YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHVzaFRvTmV3c0Rpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3RvY29sLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25Qcm90b2NvbCcgfSxcblx0XHRcdFx0aG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpcHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiYXNlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjZXJ0aWZpY2F0ZUtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRib2R5WHNsdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWNlbnROZXdzVGltZUludGVydmFsIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQdXNoVG9OZXdzRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVB1c2hUb05ld3NEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==